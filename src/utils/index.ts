import crypto from "crypto";
import fs from "fs";

export const generateIdentifier = (text: string) => {
  const secretKey = "2noScript";
  const hmac = crypto.createHmac("sha256", secretKey);
  hmac.update(text);
  const encodedString = hmac.digest("hex");
  return encodedString.substring(0, 16);
};

export const saveDataToJson = (data: any, pathFile: string) => {
  try {
    const jsonData = JSON.stringify(data, null, 4);
    fs.writeFileSync(pathFile, jsonData);
    console.log(`save data success`);
  } catch (error) {
    console.error(`save data fail ${error}`);
  }
};



 export function xorEncrypt(input: string, key: string): string {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    output += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return btoa(output); 
}

export function xorDecrypt(encrypted: string, key: string): string {
  const decoded = atob(encrypted); 
  let output = '';
  for (let i = 0; i < decoded.length; i++) {
    output += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return output;
}