const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
}

function decode(expr) {
  let arr = []

  for (let i = 0; i < expr.length; i = i + 10) {
    arr.push(expr.slice(i, i + 10))
  }
  for (let i = 0; i < arr.length; i++) {
    let letter = ''
    if (arr[i] == '**********') {
      arr[i] = ' '
      continue
    }

    for (let j = 0; j <= 10; j = j + 2) {
      if (arr[i][j] === '1' && arr[i][j + 1] === '0') {
        letter = letter + '.'
      } else if (arr[i][j] === '1' && arr[i][j + 1] === '1') {
        letter = letter + '-'
      }
    }

    arr[i] = MORSE_TABLE[letter]
  }

  return arr.join('')
}

module.exports = {
  decode,
}
