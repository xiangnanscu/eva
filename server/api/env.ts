import QRCode from "qrcode";

export default defineEventHandler(async (event) => {
  const res = await QRCode.toDataURL("http://localhost:3000/communityQrcode/1");
  console.log(res);
  return "ok";
});
