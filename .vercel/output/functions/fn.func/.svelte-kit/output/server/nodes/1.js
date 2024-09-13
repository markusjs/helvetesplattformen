

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.31945858.js","_app/immutable/chunks/index.49334c08.js","_app/immutable/chunks/singletons.8b9b0639.js"];
export const stylesheets = [];
export const fonts = [];
