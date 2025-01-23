import crypto from "crypto";
import fs from "fs";
import  path from 'path';

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



function findRootDirectory() {

  let currentDir = path.resolve(__dirname);
  while (!fs.existsSync(path.join(currentDir, 'package.json'))) {
    const parentDir = path.dirname(currentDir);
    if (currentDir === parentDir) break;
    currentDir = parentDir;
  }

  return currentDir;
}


export const ROOT_PATH=findRootDirectory()


// private async logInHelper(page: Page) {
//   if (!this.isisLoggedIn) {
//       await page.goto(this.baseUrl)
//       await page.waitForSelector(
//           "button[data-x-bind=\"OpenModal('login')\"]"
//       )
//       await page.click("button[data-x-bind=\"OpenModal('login')\"]")

//       await page.waitForSelector('input[data-x-model="form.email"]')
//       await page.type(
//           'input[data-x-model="form.email"]',
//           xorDecrypt(this.emailLogin, AUTHOR_KEY),
//           { delay: 100 }
//       )

//       await page.waitForSelector('input[data-x-model="form.password"]')
//       await page.type(
//           'input[data-x-model="form.password"]',
//           xorDecrypt(this.passwordLogin, AUTHOR_KEY),
//           { delay: 100 }
//       )

//       await page.click('button[data-x-bind="Submit"]')
//       await page.waitForSelector(
//           "img[data-x-bind=\"UserAvatar($store.account.userData)\"]"
//       )
//       this.isisLoggedIn=true
//   }
// }
