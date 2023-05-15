// src/routes/+page.server.ts

import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const response = await prisma.prayer.findMany({});

  return { prayers: response };
}) satisfies PageServerLoad;
