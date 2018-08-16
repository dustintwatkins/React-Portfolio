import Serializer from './Serializer'


interface requestObject {
  str: string
  execute?: string
}

class ClientCommunicator {
  static async send(urlPath: string, requestInfo: requestObject): Promise<string> {
    const url: string = encodeURI(`${urlPath}?data=${Serializer.serialize(requestInfo)}`)
    console.log(url)

    return fetch(url)
      .then(response => response.json())
      .then(json => json.str)
      .catch((error) => {
        console.log('Fetch error:', error)
        return requestInfo.str
      })
  }
}

export default ClientCommunicator
