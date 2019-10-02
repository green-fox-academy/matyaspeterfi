'use strict'

export class Count {

  _testSource: string = "sdfsdflkfSDVdjnljnln sdfsdf km a"

  countLetters(input): any {
    let _destination: any = {}
    let input2: string[] = input.toLocaleLowerCase().replace(/\s/g, "").split("").sort()
    input2.forEach(letter => {
      if (!_destination[letter]) {
        _destination[letter] = 0
      }
      _destination[letter]++
    })
    return _destination;
  }
}

let numCount = new Count;