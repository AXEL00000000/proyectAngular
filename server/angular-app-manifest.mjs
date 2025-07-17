
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/proyectAngular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/proyectAngular"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/proyectAngular/login"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/proyectAngular/tabledogs"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/proyectAngular/info-user"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/proyectAngular/user-dialog"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23547, hash: '3d3c9a6ba91a5de1e1c95ac3135a9aa6c2f0310d0e02b2ef2f79df9d0fec9496', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17150, hash: 'a3c3e9fc2d000b42b64665e60afbc7491e85abf5aca9d757310d6fc308dfaf7a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-Z5UYKNDX.css': {size: 6934, hash: 'VxIyzD7LHG8', text: () => import('./assets-chunks/styles-Z5UYKNDX_css.mjs').then(m => m.default)}
  },
};
