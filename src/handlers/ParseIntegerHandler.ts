import HandlerBase from './HandlerBase'
import StringProcessor from './StringProcessor'


interface Request {
  str: string
}

interface Response {
  str: string
}

class ParseIntegerHandler extends HandlerBase {
  static handle(r: Request): Response {
    return { str: StringProcessor.parseInteger(r.str) }
  }
}

export default ParseIntegerHandler
