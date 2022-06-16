
const { buildAndPush } = require('./coreLogical');

(async () => {
  await buildAndPush('yarn build', {
    bucket:"zclub.app",
  });
})();
