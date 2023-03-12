import { Buffer } from "buffer";
import { decode, encode } from "base64-arraybuffer";

export const base64ToArrayBuffer = (base64, window) => {
  var binary_string = Buffer.from(base64, "base64");
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
};

export const encodeCredentialInfoRequest = (publicKeyCredential) => {
  if (publicKeyCredential instanceof Array) {
    let arr = [];
    for (let i of pubKeyCred) {
      arr.push(encodeCredentialInfoRequest(i));
    }

    return arr;
  }
  if (publicKeyCredential instanceof ArrayBuffer) {
    return encode(publicKeyCredential);
  }
  if (publicKeyCredential instanceof Object) {
    let obj = {};
    for (const key in publicKeyCredential) {
      obj[key] = encodeCredentialInfoRequest(publicKeyCredential[key]);
    }
    return obj;
  }
  return publicKeyCredential;
};

export const publicKeyCredentialToJSON = (publicKeyCredential) => {
  if (publicKeyCredential instanceof Array) {
    let arr = [];
    for (let i of publicKeyCredential) {
      arr.push(publicKeyCredentialToJSON(i));
    }

    return arr;
  }

  if (publicKeyCredential instanceof ArrayBuffer) {
    return decode(publicKeyCredential);
  }

  if (publicKeyCredential instanceof Object) {
    let obj = {};
    for (const key in publicKeyCredential) {
      obj[key] = publicKeyCredentialToJSON(publicKeyCredential[key]);
    }
    return obj;
  }
  return publicKeyCredential;
};

export const encodeAssetRequest = (assetReq) => {
  assetReq.challenge = decode(assetReq.challenge);

  for (let allowCred of assetReq.allowCredentials) {
    allowCred.id = decode(allowCred.id);
  }

  return assetReq;
};

export const encodeCredentialsRequest = (credReq) => {
  credReq.challenge = decode(credReq.challenge);
  credReq.user.id = decode(credReq.user.id);
  return credReq;
};
