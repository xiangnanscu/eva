import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  // const res = await prisma.user.create({ data: { name: "kate2", sfzh: "101" } })
  const users = await prisma.worker.findMany({where:{}})
  return users
})