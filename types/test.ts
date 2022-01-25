import { Buffer } from 'buffer';
import { short, safe } from '@tradle/urlsafe-base64';

[short, safe].forEach(impl => {
    let str: string = impl.encode('hello');
    str = impl.encode(Buffer.from('hi'));
    const buf: Buffer = impl.decode('hello');
});
