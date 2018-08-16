import * as express from 'express'
import * as cors from 'cors'

import ExecCommandHandler from './handlers/ExecCommandHandler'
import ToLowerCaseHandler from './handlers/ToLowerCaseHandler'
import TrimHandler from './handlers/TrimHandler'
import ParseIntegerHandler from './handlers/ParseIntegerHandler'


class ServerCommunicator {
  port = process.env.PORT || 8080
  app = express()

  start(): void {
    this.middleware()
    this.routes()
    this.listen()
  }

  middleware(): void {
    this.app.use(cors())
  }

  routes(): void {
    this.app.get('/cmd', (req: express.Request, res: express.Response) => {
      const data = JSON.parse(req.query.data)

      res.json(ExecCommandHandler.handle(data))
    })

    this.app.get('/to-lower-case', (req: express.Request, res: express.Response) => {
      const data = JSON.parse(req.query.data)

      res.json(ToLowerCaseHandler.handle(data))
    })

    this.app.get('/trim', (req: express.Request, res: express.Response) => {
      const data = JSON.parse(req.query.data)

      res.json(TrimHandler.handle(data))
    })

    this.app.get('/parse-integer', (req: express.Request, res: express.Response) => {
      const data = JSON.parse(req.query.data)

      res.json(ParseIntegerHandler.handle(data))
    })
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`)
    })
  }
}

export default ServerCommunicator
