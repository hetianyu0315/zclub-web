export default {
  title: 'ZClub',
  favicon: '/favicons/favicon.ico',
  metas: [
    {
      name: 'keywords',
      content:
        'Leading audio-focused socail app that enable users to earn revenue share ',
    },
    {
      name:'apple-mobile-web-app-capable',
      content: 'yes'
    },
    {
      property: 'og:title',
      content: 'ZClub',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://zclub.app/',
    },
    {
      property: 'og:image',
      content: 'https://zclub.app/logo_small.png',
    },
  ],
  routes:[
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', exact: true,component: '@/pages/index' },
        { path: '/litePaper', exact: true,component: '@/pages/litePaper/index' },
        { redirect: '/'}
      ],
    },
  ],
  exportStatic:{
   // htmlSuffix: true 
  },
  dynamicImport:{
    loading: '@/pages/loading',
  },
  hash:true,
};
