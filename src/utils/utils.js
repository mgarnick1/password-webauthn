import { Buffer } from "buffer";
export const base64ToArrayBuffer = (base64, window) => {
  var binary_string = Buffer.from(base64, "base64");
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
};
