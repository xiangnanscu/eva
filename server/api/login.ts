import { PrismaClient } from "@prisma/client";
import { login } from "../middleware/user";

const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const data = await useBody(event);
  const user = await prisma.user.findUnique({ where: { sfzh: data.sfzh } });
  if (user == null) {
    throw createError({
      statusCode: 422,
      data: { sfzh: `身份证号"${data.sfzh}"不存在` },
    });
  }
  if (user.password == data.password) {
    login(event, user);
    return { id: user.id, name: user.name, sfzh: user.sfzh };
  } else {
    throw createError({
      statusCode: 422,
      statusMessage: "密码不正确",
    });
  }
});
