import QRCode from "qrcode";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params.id);
  const workers = await prisma.worker.findMany({ where: { community: { id } } });
  const community = await prisma.community.findUniqueOrThrow({ where: { id } });
  return { community, workers };
});
