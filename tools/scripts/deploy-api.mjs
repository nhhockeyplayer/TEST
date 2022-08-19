const https = require('https');

// Replace this with a deploy hook (example: https://render.com/docs/deploy-hooks)
const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 443,
  path: process.env.TEST_API_ENDPOINT,
  method: 'GET',
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
