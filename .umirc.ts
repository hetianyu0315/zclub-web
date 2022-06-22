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
      path:'/referral',
      component: '@/layouts/index2',
      routes:[
        { path: '/referral', exact: true,component: '@/pages/invite/index' },
        { path: '/referral/mission', exact: true,component: '@/pages/invite/mission/index' },
        { path: '/referral/sharecode', exact: true,component: '@/pages/invite/shareCode/index' },
        { path: '/referral/wallet', exact: true,component: '@/pages/invite/wallet/index' },
      ]
    },
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
  },
  dynamicImport:{
    loading: '@/pages/loading',
  },
  hash:true,
};
