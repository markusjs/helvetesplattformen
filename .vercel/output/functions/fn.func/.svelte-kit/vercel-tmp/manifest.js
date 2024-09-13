export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.37495ac0.js","app":"_app/immutable/entry/app.0394bbd5.js","imports":["_app/immutable/entry/start.37495ac0.js","_app/immutable/chunks/index.49334c08.js","_app/immutable/chunks/singletons.8b9b0639.js","_app/immutable/entry/app.0394bbd5.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.49334c08.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
