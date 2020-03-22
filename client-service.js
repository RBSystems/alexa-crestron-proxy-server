const axios = require('axios');
const https = require('https');

const address = 'https://mc3.joshlogic.com';
const username = 'greengrass';
const password = 'yy789963';

/**
 * 
 *
 * @param {*} request to be sent to MC3.
 * @returns response
 */
async function request(request) {
  try {
    console.log(process.version);
    const config = {};
    config.IOT_BROKER_ENDPOINT = "alpmqh09eheg4-ats.iot.us-east-1.amazonaws.com".toLowerCase();
    config.IOT_BROKER_REGION = "us-east-1";
    config.IOT_THING_NAME = "house";

    const options = {
      baseURL: address,
      method: request.method,
      url: request.url,
      data: request.data,
      headers: request.headers,
      body: request.body,
      httpsAgent: new https.Agent({     //ignores self signed certs
        rejectUnauthorized: false,
        ciphers: 'DES-CBC3-SHA',
      }),
      auth: {
        username: username,
        password: password
      }
    };
    const instance = axios.create(options);
    const response = await instance.request(options);
    return response;
  }
  catch (err) {
    console.log(err);
    return err;
  }
}

module.exports.request = request;
