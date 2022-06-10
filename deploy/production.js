// 根据命令行输入(`npm run deploy projectName`)获取工程名
const { buildAndPush } = require('./coreLogical');

(async () => {
  await buildAndPush('yarn build', {
    bucket:"zclub.app",
  });
})();
