import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.aa7b8af7.js","app":"_app/immutable/entry/app.49f17a92.js","imports":["_app/immutable/entry/start.aa7b8af7.js","_app/immutable/chunks/index.8a44c078.js","_app/immutable/chunks/singletons.0c881894.js","_app/immutable/entry/app.49f17a92.js","_app/immutable/chunks/index.8a44c078.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/prayer-request",
				pattern: /^\/prayer-request\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
