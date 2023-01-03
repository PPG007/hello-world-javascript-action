const core = require('@actions/core');
const fs = require('fs');

try {
  const keywords = JSON.parse(core.getInput('keywords'));
  keywords.forEach(keyword => {
    console.log(keyword);
  });
  parse('.');
  core.setOutput('result', 'success');
} catch (error) {
  core.setFailed(error.message);
}

function parse(dirName) {
    const files = fs.readdirSync(dirName);
    for (let i = 0; i < files.length; i++) {
      const tempPath = path.join(dirName, files[i]);
      if (files[i].startsWith('.')) {
        continue;
      }
      if (fs.lstatSync(tempPath).isDirectory()) {
        parse(tempPath);
      } else {
        console.log(tempPath)
      }
    }
  }
