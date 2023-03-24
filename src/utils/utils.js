import { Buffer } from "buffer";

export const base64ToArrayBuffer = (base64) => {
  var buffer = Buffer.from(base64, "base64");
  var arraybuffer = new Uint8Array(buffer).buffer;
  return arraybuffer;
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
    return arrayBufferToString(publicKeyCredential);
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

// export const publicKeyCredentialToJSON = (publicKeyCredential) => {
//   if (publicKeyCredential instanceof Array) {
//     let arr = [];
//     for (let i of publicKeyCredential) {
//       arr.push(publicKeyCredentialToJSON(i));
//     }

//     return arr;
//   }

//   if (publicKeyCredential instanceof ArrayBuffer) {
//     return decode(publicKeyCredential);
//   }

//   if (publicKeyCredential instanceof Object) {
//     let obj = {};
//     for (const key in publicKeyCredential) {
//       obj[key] = publicKeyCredentialToJSON(publicKeyCredential[key]);
//     }
//     return obj;
//   }
//   return publicKeyCredential;
// };

// export const encodeAssetRequest = (assetReq) => {
//   assetReq.challenge = decode(assetReq.challenge);

//   for (let allowCred of assetReq.allowCredentials) {
//     allowCred.id = decode(allowCred.id);
//   }

//   return assetReq;
// };

// export const encodeCredentialsRequest = (credReq) => {
//   credReq.challenge = decode(credReq.challenge);
//   credReq.user.id = decode(credReq.user.id);
//   return credReq;
// };

export const arrayBufferToString = (arrayBuffer) => {
  const buffer = Buffer.from(arrayBuffer);
  let bufferToString = new Buffer(buffer).toString('base64');
  const plusReplace = /[+]/g;
  const forwardSlashReplace = /[/]/g;
  bufferToString = bufferToString.replace(plusReplace, '-').replace(forwardSlashReplace, '_')
  return bufferToString;
}
