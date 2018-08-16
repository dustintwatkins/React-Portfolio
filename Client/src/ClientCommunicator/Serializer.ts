class Serializer {
  static serialize(obj: object): string {
    return JSON.stringify(obj)
  }

  static deserialize(str: string): JSON {
    return JSON.parse(str)
  }
}

export default Serializer
