import { Buffer } from 'buffer';

export type BufferLike = ArrayBuffer | SharedArrayBuffer | any[] | Uint8Array | string;

export interface Codec {
  encode: (bytes: BufferLike) => string;
  decode: (string: string) => Buffer;
}

export const short: Codec;
export const safe: Codec;
