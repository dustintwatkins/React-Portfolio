import HandlerBase from './HandlerBase'
import StringProcessor from './StringProcessor'


interface Request {
  str: string
}

interface Response {
  str: string
}

class ToLowerCaseHandler extends HandlerBase {
  static handle(r: Request): Response {
    return { str: StringProcessor.toLowerCase(r.str) }
  }
}

export default ToLowerCaseHandler
