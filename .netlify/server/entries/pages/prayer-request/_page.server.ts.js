import { p as prisma } from "../../../chunks/prisma.js";
import { f as fail } from "../../../chunks/index.js";
const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    let content = data.get("content");
    let email = data?.get("email");
    let author = data?.get("name");
    if (!content) {
      return fail(400, { content, missing: true });
    }
    if (typeof content != "string") {
      return fail(400, { incorrect: true });
    }
    await prisma.prayer.create({
      data: {
        content,
        author,
        email
      }
    });
  }
};
export {
  actions
};
