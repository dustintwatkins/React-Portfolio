import * as React from 'react'
import './Project.css'


class Project extends React.Component<React.SFC<{}>> {

  render(): JSX.Element {
    return (
      <section className={'container'}>
        <div className={'projects-container'}>
          <div className="row">
            <a>
              <div className="col-sm-4" id={'project'}>
                <h4>Ticket To Ride</h4>
                <p>Multi player network game implementation of the board game Ticket to Ride</p>
              </div>
            </a>
            <div className="col-sm-4" id={'project'}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
            </div>
            <div className="col-sm-4" id={'project'}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4" id={'project'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
            <div className="col-sm-4" id={'project'}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
            </div>
            <div className="col-sm-4" id={'project'}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Project