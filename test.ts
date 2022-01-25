import tape = require('fresh-tape');
import { short, safe } from '.';

tape('short encode', async t => {
  const encoded = short.encode('hello')
  t.equals(encoded, 'aGVsbG8')
  t.equals(short.decode(encoded + '=').toString(), 'hello')
})

tape('safe encode', async t => {
  const encoded = safe.encode('hello')
  t.equals(encoded, 'aGVsbG8=')
  t.equals(safe.decode(encoded).toString(), 'hello')
})
