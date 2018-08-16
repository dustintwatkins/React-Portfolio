class IStringProcessor {
  static async toLowerCase(s: string): Promise<string> {
    throw "You must implement the toLowerCase function in this class"
  }

  static async trim(s: string): Promise<string> {
    throw "You must implement the trim function in this class"
  }

  static async parseInteger(s: string): Promise<string> {
    throw "You must implement the parseInteger function in this class"
  }
}

export default IStringProcessor
