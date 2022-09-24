import QRCode from "qrcode";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const community = await prisma.community.findUniqueOrThrow({ where: { id: Number(event.context.params.id) } });
  const url = `http://${event.req.headers.host}/communityReview/${event.context.params.id}`;
  // const dataURL = await QRCode.toDataURL(url);
  const name = community.name;
  return {
    host: event.req.headers.host,
    url,
    // dataURL,
    name,
  };
});
