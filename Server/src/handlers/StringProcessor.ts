class StringProcessor {
  static toLowerCase(s:string):string {
    return s.toLowerCase()
  }

  static trim(s:string):string {
    return s.trim()
  }

  static parseInteger(s:string):string {
    if (isNaN(parseInt(s)))
      return 'That\'s not a number!'
    return parseInt(s).toString()
  }
}

export default StringProcessor
