const tape = require('fresh-tape')
const { short, safe } = require('./index.js')

tape('short encode', async t => {
  const encoded = short.encode('hello')
  t.equals(encoded, 'aGVsbG8')
  t.equals(short.decode(encoded + '=').toString(), 'hello')
})

tape('python encode', async t => {
  const encoded = safe.encode('hello')
  t.equals(encoded, 'aGVsbG8=')
  t.equals(safe.decode(encoded).toString(), 'hello')
})
