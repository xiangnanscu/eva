// https://gist.github.com/siwalikm/8311cf0a287b98ef67c73c1b03b47154
import crypto from "crypto";

const ENC_KEY = "accdefghijklmnopqrstuvwxyz123456"; // set random encryption key
const IV = "1234567812345678"; // set random initialisation vector
// ENC_KEY and IV can be generated as crypto.randomBytes(32).toString('hex');

// const phrase = "who let the dogs out";

const encrypt = (val: string) => {
  let cipher = crypto.createCipheriv("aes-256-cbc", ENC_KEY, IV);
  let encrypted = cipher.update(val, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
};

const decrypt = (encrypted: string) => {
  let decipher = crypto.createDecipheriv("aes-256-cbc", ENC_KEY, IV);
  let decrypted = decipher.update(encrypted, "base64", "utf8");
  return decrypted + decipher.final("utf8");
};

// let encrypted_key = encrypt(phrase);
// let original_phrase = decrypt("U/63LdMBUrTS2ebqmshhD6hXl4S8ZwVKyQaY5AKsEIdlxPiW0mIj2qGn+veEyXVmLeumxuk/+MRZubxovyNjJmBjrDVkkfmTI9N6ag5BH+XvKjq4+GRcNsQ5OPcAQNdC19xEIPyxHWfjrT6Lx0k5ng==");

// console.log("Decrypted content: ", original_phrase);
const userCookieName = "user"
const login = (event: any, user: object) => {
  setCookie(event, userCookieName, encrypt(JSON.stringify(user)));
};
export { encrypt, decrypt, login };

export default defineEventHandler((event) => {
  const userCookie = getCookie(event, userCookieName);
  if (!userCookie) {
    return;
  }
  try {
    event.context.user = JSON.parse(decrypt(userCookie));
    // console.log("event.context.user", event.context.user)
  } catch (error) {
    console.log("user cookie decrypt failed:", error);
  }
});
