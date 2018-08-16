import ClientCommunicator from './ClientCommunicator/ClientCommunicator'
import IStringProcessor from './StringProcessorProxy/IStringProcessor'
import StringProcessorProxy from './StringProcessorProxy/StringProcessorProxy'
import StringProcessorProxy_CMD from './StringProcessorProxy/StringProcessorProxy_CMD'


interface requestObject {
  str: string
  execute?: string
}

interface IClientCommunicator {
  send: (urlPath: string, requestInfo: requestObject) => Promise<string>
}

interface iStringProcessorObj {
  toLowerCase: (s:string) => Promise<string>,
  trim: (s:string) => Promise<string>,
  parseInteger: (s:string) => Promise<string>
}

interface singleton {
  instance: singleton,
  clientCommunicator: IClientCommunicator,
  iStringProcessor: any,
  stringProcessorProxy: iStringProcessorObj,
  stringProcessorProxy_CMD: iStringProcessorObj
}

const Singleton: singleton = {
  instance: this,
  clientCommunicator: ClientCommunicator,
  iStringProcessor: IStringProcessor,
  stringProcessorProxy: StringProcessorProxy,
  stringProcessorProxy_CMD: StringProcessorProxy_CMD
}

export default Singleton
