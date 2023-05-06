import * as server from '../entries/pages/prayer-request/_page.server.ts.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/prayer-request/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/prayer-request/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.0d29fcd5.js","_app/immutable/chunks/index.8a44c078.js"];
export const stylesheets = ["_app/immutable/assets/3.2d24b471.css"];
export const fonts = [];
