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
            <a href="#home"><button>Home</button></a>
            <a href="#experience"><button>Experience</button></a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div>
        <div className={'main-container'}>
          <div className={'title-photo'}>
            <img src='/Users/DustinWatkins/WebstormProjects/React-Portfolio/Client/public/images/ToriDustin-33.png'/>
          </div>
        </div>
        <hr></hr>
        <Project />
        <Footer />
      </section>
    )
  }
}

export default App
