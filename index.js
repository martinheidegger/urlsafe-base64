const { Buffer } = require('buffer')

const safe = Object.freeze({
  encode (bytes) {
    return Buffer.from(bytes)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
  },
  decode (string) {
    return Buffer.from(
      string
        .replace(/-/g, '+')
        .replace(/_/g, '/') +
      ending[string.length % 4],
      'base64'
    )
  }
})

const ending = ['', '===', '==', '==']

const short = Object.freeze({
  encode (bytes) {
    return safe.encode(bytes).replace(/=+$/, '')
  },
  decode: safe.decode
})

const codec = { short, safe }

// TypeScript compatibility
codec.default = codec

module.exports = Object.freeze(codec)
