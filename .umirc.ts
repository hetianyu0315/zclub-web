export default {
  title: 'ZClub',
  favicon: '/favicons/favicon.ico',
  metas: [
    {
      name: 'keywords',
      content:
        'Leading audio-focused social app that enable users to earn revenue share',
    },
    {
      name: 'apple-mobile-web-app-capable',
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
    {
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      property: 'twitter:title',
      content: 'ZClub'
    },
    {
      property: 'twitter:description',
      content: 'Leading audio-focused social app that enable users to earn revenue share'
    },
    {
      property: 'twitter:url',
      content: 'https://zclub.app'
    },
    {
      property: 'twitter:image',
      content: 'https://zclub.app/img_tweet.png'
    }
  ],
  routes: [
    {
      path: '/airdrop',
      component: '@/layouts/airdrop/index',
      routes: [
        { path: '/airdrop', exact: true, component: '@/pages/airdrop/index' },
        { path: '/airdrop/verify', exact: true, component: '@/pages/airdrop/verify' },
        { redirect: '/airdrop' }
      ]
    },
    {
      path: '/referral',
      component: '@/layouts/index2',
      routes: [
        { path: '/referral', exact: true, component: '@/pages/invite/index' },
        { path: '/referral/mission', exact: true, component: '@/pages/invite/mission/index' },
        { path: '/referral/sharecode', exact: true, component: '@/pages/invite/shareCode/index' },
        //{ path: '/referral/wallet', exact: true, component: '@/pages/invite/wallet/index' },
        { redirect: '/referral' }
      ]
    },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', exact: true, component: '@/pages/index' },
        { path: '/howToPlay', exact: true, component: '@/pages/howToPlay/index' },
        { path: '/litePaper', exact: true, component: '@/pages/litePaper/index' },
        { redirect: '/' }
      ],
    },
  ],
  exportStatic: {
  },
  dynamicImport: {
    loading: '@/pages/loading',
  },
  hash: true,
  dva: {
    immer: false,
    hmr: false
  },
  webpack5:{},
  chainWebpack(memo, { env, webpack }) {
    memo.module.rule('svga')
      .test(/\.svga$/)
      .use('file-loader')
      .loader('url-loader')
      .options({
        limit: false
      })
    memo.module.rule('css')
      .test(/\.css$/)
      .sideEffects(true);
    
    return memo;
  },
};
