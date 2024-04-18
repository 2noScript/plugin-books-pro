import crypto from "crypto";

export const generateIdentifier = (text: string) => {
  const secretKey = "2noScript";
  const hmac = crypto.createHmac("sha256", secretKey);
  hmac.update(text);
  const encodedString = hmac.digest("hex");
  return encodedString.substring(0, 16);
};
