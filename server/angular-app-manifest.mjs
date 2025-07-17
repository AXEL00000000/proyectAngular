
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/proyectAngular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/proyectAngular"
  },
  {
    "renderMode": 2,
    "route": "/proyectAngular/login"
  },
  {
    "renderMode": 2,
    "route": "/proyectAngular/tabledogs"
  },
  {
    "renderMode": 2,
    "route": "/proyectAngular/info-user"
  },
  {
    "renderMode": 2,
    "route": "/proyectAngular/user-dialog"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23527, hash: 'a2458e09bdd11ae4d1eb118295515b71fb33c6269c1a93accb7cdce115f3b306', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17130, hash: 'd5cad3831adf8a265ee802e03bb3fe13520ae226b8944c72b4cecc8d53c1be1d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 105990, hash: 'a253962de7df6fb0796bf73400c5988bd82e31b784165fbd40840c3cc4e3461e', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105990, hash: 'a253962de7df6fb0796bf73400c5988bd82e31b784165fbd40840c3cc4e3461e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'info-user/index.html': {size: 58446, hash: '9fce7a4defcc0d649da56d98b49f8ac900c413930841617c58b50240a364b930', text: () => import('./assets-chunks/info-user_index_html.mjs').then(m => m.default)},
    'styles-Z5UYKNDX.css': {size: 6934, hash: 'VxIyzD7LHG8', text: () => import('./assets-chunks/styles-Z5UYKNDX_css.mjs').then(m => m.default)}
  },
};
