// src/routes/create/+page.server.ts

import prisma from "$lib/prisma";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
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
        email,
      },
    });

    // throw redirect(303, `/`);
  },
} satisfies Actions;
