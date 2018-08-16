import IStringProcessor from './IStringProcessor'
import ClientCommunicator from '../ClientCommunicator/ClientCommunicator'


const url = 'http://localhost:8080/cmd'

class StringProcessorProxy_Commands extends IStringProcessor {
  static async toLowerCase(s: string) {
    return ClientCommunicator.send(url, { str: s, execute: "toLowerCase" })
  }

  static async trim(s: string) {
    return ClientCommunicator.send(url, { str: s, execute: "trim" })
  }

  static async parseInteger(s: string) {
    return ClientCommunicator.send(url, { str: s, execute: "parseInteger" })
  }
}

export default StringProcessorProxy_Commands
