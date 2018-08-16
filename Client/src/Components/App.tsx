import * as React from 'react'
import StringProcessorProxy from '../StringProcessorProxy/StringProcessorProxy'
import StringProcessorProxy_CMD from '../StringProcessorProxy/StringProcessorProxy_CMD'
import './App.css'


interface State {
  value: string,
  useCommand: boolean
}

class App extends React.Component<React.SFC<{}>> {
  state: State = {
    value: '',
    useCommand: false
  }

  handleChange(event: React.ChangeEvent): void {
    this.setState({
      value: (event.target as HTMLInputElement).value
    })
  }

  toggleCommand(event: React.ChangeEvent): void {
    this.setState({
      useCommand: (event.target as HTMLInputElement).checked,
    })
  }

  async handleClick(event: React.MouseEvent) {
    const { value, useCommand } = this.state
    const type = (event.target as HTMLElement).innerText
    let proxy_class = StringProcessorProxy

    if (useCommand) {
      proxy_class = StringProcessorProxy_CMD
    }

    switch (type) {
      case "toLowerCase":
        this.setState({
          value: await proxy_class.toLowerCase(value)
        })
        break
      case "trim":
        this.setState({
          value: await proxy_class.trim(value)
        })
        break
      case "parseInteger":
        let int = await proxy_class.parseInteger(value)
        if (int == null) {
            int = "null"
        }
        this.setState({
          value: int
        })
        break
      default:
        throw `'${type}' isn't a valid function`
    }
  }

  render(): JSX.Element {
    const results: string = this.state.value
    return (
      <section className={'app'}>
        <div className="header">
          <a href="#default" className="logo">Dustin Watkins</a>
          <div className="header-right">
            <a className="active" href="#home">Home</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div>
        <div className={'main-container'}>
          <div className={'title-photo'}>
            <h1>Dustin Watkins</h1>
            <img src='/Users/DustinWatkins/WebstormProjects/React-Portfolio/Client/public/images/ToriDustin-115.jpg'/>
          </div>
          <div className={'social-media'}>
            <div><a href="https://github.com/dustintwatkins" className="fa fa-github"></a></div>
            <div><a href="https://www.linkedin.com/in/dustin-watkins-298648105/" className="fa fa-linkedin"></a></div>
            <div><a href="https://www.facebook.com/dustin.watkins.7549" className="fa fa-facebook"></a></div>
            <div><a href="https://twitter.com/TurkTheGorilla" className="fa fa-twitter"></a></div>
          </div>
        </div>
      </section>
    )
    // return (
    //   <section>
    //     <input
    //       type="text"
    //       value={this.state.value}
    //       onChange={this.handleChange.bind(this)}
    //       placeholder="Enter some text"
    //     />
    //
    //     <fieldset className='group'>
    //       <input
    //         id="command"
    //         type="checkbox"
    //         checked={this.state.useCommand}
    //         onChange={this.toggleCommand.bind(this)}
    //       />
    //       <label htmlFor="command">Use command pattern</label>
    //     </fieldset>
    //
    //     <fieldset className='group'>
    //       <button onClick={ this.handleClick.bind(this) }>toLowerCase</button>
    //       <button onClick={ this.handleClick.bind(this) }>trim</button>
    //       <button onClick={ this.handleClick.bind(this) }>parseInteger</button>
    //     </fieldset>
    //
    //     {(results === '')? null: <pre>Results: '{results}'</pre>}
    //   </section>
    // )
  }
}

export default App
