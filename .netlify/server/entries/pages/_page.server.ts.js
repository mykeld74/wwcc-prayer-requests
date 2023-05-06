import { p as prisma } from "../../chunks/prisma.js";
const load = async () => {
  const response = await prisma.prayer.findMany({});
  console.log(response);
  return { prayers: response };
};
export {
  load
};
