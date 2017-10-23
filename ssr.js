const renderer = require('vue-server-renderer').createRenderer();

const stdin = process.stdin;
// stdin.setRawMode( true );
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', (appName) => {
  render(appName).then((html) => {
    process.stdout.write(`${html}\n`);
  }, (err) => {
    process.stderr.write(err);
  });
});


function render(appName) {
  const app = require(`./mysite/templates/${appName}`);
  return new Promise((resolve, reject) => {
    renderer.renderToString(app, (err, html) => {
      if (err) {
        reject(err);
      } else {
        resolve(html);
      }
    });
  });
}
