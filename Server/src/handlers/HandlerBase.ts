interface Request {
  str: string
  execute?: string
}

interface Response {
  str: string
}

class HandlerBase {
  static handle(r: Request): Response {
    throw 'The handle method must be implemented on all child classes'
  }
}

export default HandlerBase
