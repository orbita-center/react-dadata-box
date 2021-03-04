const util = require('util');
const exec = util.promisify(require('child_process').exec);

function log({stdout, stderr}, action) {
  console.log(`\t=> DO: ${action} ...`);
  console.log('\t\tstdout: ', stdout || 'DONE');
  stderr && console.log('\t\tstderr:', stderr);
}

async function postpublish() {
  console.log('\n=> RUN: postpublish ...');
  log(await exec("sed -i \"\" -e 's/.*index.css.*/&&&/g' -e '/&&&[[:space:]]*$/d' ./src/index.js"), 'remove css import declaration')
  log(await exec("sed -i \"\" -r 's/(\"version\":[[:space:]]\"[[:digit:]]\\.[[:digit:]].[[:digit:]])/\\1-next-js/g' ./package.json"), 'correction special case version of package')
  log(await exec("npm run-script transpile"), "transpile 'next-js' special case")
  log(await exec("npm publish --tag next-js"), "rollback changes")
  log(await exec("git reset --hard"), "rollback changes")
}

postpublish();
