import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.1ad2669b.js","_app/immutable/chunks/index.8a44c078.js"];
export const stylesheets = ["_app/immutable/assets/2.224e9e4d.css"];
export const fonts = [];
