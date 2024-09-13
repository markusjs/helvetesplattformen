import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.1112c093.js","_app/immutable/chunks/index.49334c08.js"];
export const stylesheets = ["_app/immutable/assets/0.45edc447.css","_app/immutable/assets/PostList.c2e08a32.css"];
export const fonts = [];
