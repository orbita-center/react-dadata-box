const util = require('util');
const fs = require('fs');
const exec = util.promisify(require('child_process').exec);

function log({stdout, stderr}, action) {
  console.log(`\t=> DO: ${action} ...`);
  console.log('\t\tstdout: ', stdout || 'DONE');
  stderr && console.log('\t\tstderr:', stderr);
}

async function postpublish() {
  console.log('\n=> RUN: postpublish ...');
  console.log('\t=> CHECK: postpublish.lock exists');
  // NPM could't be called with skip call postpublish script by current CLI interface of publish command
  // workaround to prevent recursive calling of postpublish script (after publish 'next-js' version of lib)
  if (fs.existsSync('postpublish.lock')) {
    fs.unlinkSync('postpublish.lock');
    console.log('\t→ SIDE-EFFECT run (lock file EXIST) → ⚠️ SKIP executing postpublish script (lock file was removed)');
    return;
  } else {
    console.log('\t→ FIRST RUN (NOT EXIST) → ⚠️ WRITING postpublish.lock...');
    fs.writeFileSync('postpublish.lock', 'this file needed to prevent recursive call of post publish script, after publishing \'next-js\' version of lib')
    log(await exec("sed -i \"\" -e 's/.*index.css.*/&&&/g' -e '/&&&[[:space:]]*$/d' ./src/index.js"), 'remove css import declaration')
    log(await exec("sed -i \"\" -r 's/(\"version\":[[:space:]]\"[[:digit:]]\\.[[:digit:]].[[:digit:]])/\\1-next-js/g' ./package.json"), 'correction special case version of package')
    log(await exec("npm run-script transpile"), "transpile 'next-js' special case")
    log(await exec("npm publish --tag next-js"), "publishing 'next-js version of lib'")
    log(await exec("git reset --hard"), "rollback changes")
  }
}

postpublish();
