import * as React from 'react'
import './App.css'
import Project from './ProjectDisplay/Project'
import Footer from './Footer/Footer'


interface State {

}

class App extends React.Component<React.SFC<{}>> {
  state: State = {

  }

  render(): JSX.Element {
    return (
      <section className={'app'}>
        <div className="header">
          <a href="#default" className="logo">Dustin Watkins Portfolio</a>
          <div className="header-right">
            <a className="active" href="#home">Home</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div>
        <div className={'main-container'}>
          <div className={'title-photo'}>
            <img src='/Users/DustinWatkins/WebstormProjects/React-Portfolio/Client/public/images/ToriDustin-115.jpg'/>
          </div>
        </div>
        <Project />
        <Footer />
      </section>
    )
  }
}

export default App
