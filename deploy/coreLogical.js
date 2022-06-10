// 根据命令行输入(`npm run deploy projectName`)获取工程名
const { upload, getAllFiles, purge } = require('@ndkit/cdn');
const execSync = require('child_process').execSync;
const path = require('path');

module.exports = {
  buildAndPush: async (npmScript,config) => {
    execSync(npmScript, {
      stdio: 'inherit',
    });
    // 2. 将dist目录的文件上传至cdn
    const originDirectory = path.resolve(__dirname, '../dist/');
    const filesArr = getAllFiles(originDirectory);
    const assetsFiles = []; // 资源文件, 无需清空缓存
    const mainFiles = []; // html文件, 需要清空缓存
    filesArr.forEach((item) => {
      if (item.absolute.indexOf(`.html`) > -1) {
        mainFiles.push(item); // .html单独处理, 做协商缓存
      } else {
        assetsFiles.push(item); // 资源文件都加上强缓存
      }
    });
    // console.log(assetsFiles)
    // console.log(mainFiles)

    // 上传资源文件, 不用清缓存
    const assetsPath = await upload({
      fileArr: assetsFiles,
      Bucket: config.bucket,
      Prefix: '.',
      CacheControl: 'public, max-age=31536000',
      Acl:  true ,
      s3Type: 'zclub'
    });

    // 上传html文件, 需要清理缓存
    const remotePath = await upload({
      fileArr: mainFiles,
      Bucket: config.bucket,
      Prefix: '.',
      CacheControl: 'public, max-age=0',
      Acl: true,
      s3Type: 'zclub'
    });
  },
};
