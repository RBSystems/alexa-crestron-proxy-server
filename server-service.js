const https = require('https');
const fs = require('fs');
const client = require('./client-service');

const options  = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

https.createServer(options, handler).listen(7777);

async function handler(request, response){
  console.log(request.url);
  const rsp = await client.request(request);
  response.write(rsp);
  response.end();
}