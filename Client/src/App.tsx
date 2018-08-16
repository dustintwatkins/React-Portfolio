import * as React from 'react'
import StringProcessorProxy from './StringProcessorProxy/StringProcessorProxy'
import StringProcessorProxy_CMD from './StringProcessorProxy/StringProcessorProxy_CMD'
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
      <section>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          placeholder="Enter some text"
        />

        <fieldset className='group'>
          <input
            id="command"
            type="checkbox"
            checked={this.state.useCommand}
            onChange={this.toggleCommand.bind(this)}
          />
          <label htmlFor="command">Use command pattern</label>
        </fieldset>

        <fieldset className='group'>
          <button onClick={ this.handleClick.bind(this) }>toLowerCase</button>
          <button onClick={ this.handleClick.bind(this) }>trim</button>
          <button onClick={ this.handleClick.bind(this) }>parseInteger</button>
        </fieldset>

        {(results === '')? null: <pre>Results: '{results}'</pre>}
      </section>
    )
  }
}

export default App
