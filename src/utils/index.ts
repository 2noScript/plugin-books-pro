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
