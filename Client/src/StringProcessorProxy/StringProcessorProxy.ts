import IStringProcessor from './IStringProcessor'
import ClientCommunicator from '../ClientCommunicator/ClientCommunicator'


const baseURL = 'http://localhost:8080/'

class StringProcessorProxy_NoCommands extends IStringProcessor {
  static async toLowerCase(s: string) {
    return ClientCommunicator.send(`${baseURL}to-lower-case`, { str: s })
  }

  static async trim(s: string) {
    return ClientCommunicator.send(`${baseURL}trim`, { str: s })
  }

  static async parseInteger(s: string) {
    return ClientCommunicator.send(`${baseURL}parse-integer`, { str: s })
  }
}

export default StringProcessorProxy_NoCommands
