import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const reviews = await prisma.review.findMany({
    where: {},
    include: { worker: { select: { sfzh: true, name: true } } },
  });
  return reviews;
});
