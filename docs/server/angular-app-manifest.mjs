
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/PranayParmar/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/PranayParmar"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11357, hash: '675b322cc719f976d64d8fff53d23d319d98ca3251043bcb727e662bad93afd9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6772, hash: '8e32233035750586b29a99c64de4b5eba61a75620844808985d39104a8c28508', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 40144, hash: '97c8c3faedef1d5f2a952a88364e1710494e6cd8657c059d2a4c43878617a5e5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OX24RFSM.css': {size: 227656, hash: '+DjzemKfAas', text: () => import('./assets-chunks/styles-OX24RFSM_css.mjs').then(m => m.default)}
  },
};
