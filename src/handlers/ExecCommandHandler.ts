import HandlerBase from './HandlerBase'
import StringProcessor from './StringProcessor'


interface ICommand {
  str: string
  execute: string
}

interface Response {
  str: string
}

class ExecCommandHandler extends HandlerBase {
  static handle(c: ICommand): Response {
    if (StringProcessor.hasOwnProperty(c.execute)) {
      // @ts-ignore
      return { str: StringProcessor[c.execute](c.str) }
    } else {
      throw `StringProcessor doesn't have the function ${c.execute}`
    }
  }
}

export default ExecCommandHandler
