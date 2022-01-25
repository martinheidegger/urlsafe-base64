# python compatible urlsafe base 64 codec

Similar to [urlsafe-base64](https://npmjs.com/package/urlsafe-base64) this library de-/encodes urlsafe base64 strings.

What it does different:

- Offers a `safe` and `short` variant with the `short` variant being same as `urlsafe-base64` and the `safe` variant keeping
the ending `=` characters making it compatible with other implementations such as python.
- Comes with typescript definitions.
- Uses `Buffer.from` as `new Buffer` has been deprecated for a long time.

## Usage

```js
import { short, safe } from '@tradle/urlsafe-base64'

;[ short, safe ].forEach(variant => {
  const base64Str = short.encode('hello')

  const decoded = short.decode(base64Str)
  const original = decoded.toString()
})
```

## License

[MIT](./LICENSE)
