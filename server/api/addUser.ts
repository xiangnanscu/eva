import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  const data = await useBody(event);
  const res = await prisma.user.create({ data })
  return res;
})