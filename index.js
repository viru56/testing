var CryptoJS = require("crypto-js");

// Encrypt
var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText); // 'my message'

var message = [
  "ec2-50-19-80-70.compute-1.amazonaws.com","websdkuser","Rise123456789!"
]
function encode(message){
  return CryptoJS.AES.encrypt(message, '23424234fsdfs234sdf').toString();
}
function decode(message){
  var bytes  = CryptoJS.AES.decrypt(message, '23424234fsdfs234sdf');
  return bytes.toString(CryptoJS.enc.Utf8);
}
var encryptedData = [];
for( let key of message){
  encryptedData.push(encode(key))
}
console.log(encryptedData);

for( let key of encryptedData){
  console.log(decode(key))
}