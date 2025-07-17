
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/ProjectAngular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/ProjectAngular"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/ProjectAngular/login"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/ProjectAngular/tabledogs"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/ProjectAngular/info-user"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/ProjectAngular/user-dialog"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23499, hash: '4cdde4ea22286706985d9d6c5fe63d78b5d0173336e68cbc4bebecc94ab0622a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17118, hash: 'a0068153bf96e7a12633343f60224f4c6ee57c79c6911923aea87d41d4e1b813', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-Z5UYKNDX.css': {size: 6934, hash: 'VxIyzD7LHG8', text: () => import('./assets-chunks/styles-Z5UYKNDX_css.mjs').then(m => m.default)}
  },
};
