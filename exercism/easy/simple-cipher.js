const charset = 'abcdefghijklmnopqrstuvwxyz'
const getIdx = char => charset.indexOf(char)
const enc = (x, y) => x + y
const dec = (x, y) => x - y

const translate = (msg, key, func) => {
  return msg.split('').map((item, index) => {
    const shiftIdx = getIdx(key[index % key.length])
    const sumIdx = func(getIdx(item), shiftIdx)
    return charset[(sumIdx + charset.length) % charset.length]
  }).join('')
}

class Cipher {
  constructor(key) {
    this.key = key
  }

  encode(msg) {
    return translate(msg, this.key, enc)
  }

  decode(msg) {
    return translate(msg, this.key, dec)
  }

}

export {Cipher}