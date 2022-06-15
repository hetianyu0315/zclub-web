const { upload, getAllFiles, purge } = require('@ndkit/cdn');
const execSync = require('child_process').execSync;
const path = require('path');

module.exports = {
  buildAndPush: async (npmScript,config) => {
    execSync(npmScript, {
      stdio: 'inherit',
    });
    // put dist files to cdn
    const originDirectory = path.resolve(__dirname, '../dist/');
    const filesArr = getAllFiles(originDirectory);
    const assetsFiles = []; 
    const mainFiles = []; 
    filesArr.forEach((item) => {
      if (item.absolute.indexOf(`.html`) > -1) {
        mainFiles.push(item); 
      } else {
        assetsFiles.push(item); 
      }
    });
    
    // upload assets to cdn
    const assetsPath = await upload({
      fileArr: assetsFiles,
      Bucket: config.bucket,
      Prefix: '.',
      CacheControl: 'public, max-age=31536000',
      Acl:  true ,
      s3Type: 'zclub'
    });

    // upload html to cdn
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
