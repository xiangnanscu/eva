import { PrismaClient } from "@prisma/client";
import { login } from "../middleware/user";

const prisma = new PrismaClient();
const userLoginNames = {id:true,name:true,sfzh:true,permission:true,password:true}
export default defineEventHandler(async (event) => {
  const data = await useBody(event);
  const user = await prisma.user.findUnique({ where: { sfzh: data.sfzh },select:userLoginNames });
  if (user == null) {
    const msg = `身份证号"${data.sfzh}"不存在`
    throw createError({
      statusCode: 422,
      message: msg,
      // data: { sfzh: msg },
    });
  }
  if (user.password == data.password) {
    const logUser = { id: user.id, name: user.name, sfzh: user.sfzh, permission:user.permission }
    login(event, logUser);
    return logUser;
  } else {
    throw createError({
      statusCode: 422,
      message: "密码不正确",
    });
  }
});
