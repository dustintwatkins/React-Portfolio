import HandlerBase from './HandlerBase'
import StringProcessor from './StringProcessor'


interface Request {
  str: string
}

interface Response {
  str: string
}

class TrimHandler extends HandlerBase {
  static handle(r: Request): Response {
    return { str: StringProcessor.trim(r.str) }
  }
}

export default TrimHandler
