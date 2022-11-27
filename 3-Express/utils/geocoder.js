const NodeGeocoder = require("node-geocoder");

console.log("hello from utils");
const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: "https",
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null,
};

const geoCoder = NodeGeocoder(options);

module.exports = geoCoder;
