import * as React from 'react'
import './Footer.css'

class Footer extends React.Component<React.SFC<{}>> {
  render(): JSX.Element {
    return (
      <section>
          <div className={'social-media'}>
            <div><a href="https://github.com/dustintwatkins" className="fa fa-github"></a></div>
            <div><a href="https://www.linkedin.com/in/dustin-watkins-298648105/" className="fa fa-linkedin"></a></div>
            <div><a href="https://www.facebook.com/dustin.watkins.7549" className="fa fa-facebook"></a></div>
            <div><a href="https://twitter.com/TurkTheGorilla" className="fa fa-twitter"></a></div>
          </div>
      </section>
    )
  }
}

export default Footer
