const path = require("path");

console.log(__dirname);
console.log(__filename);

// foo/bar/biz/tiz ==> foo/bar/biz
console.log(path.dirname(__dirname));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));

// node/path/index.js ==> index.js
console.log(path.basename(__filename));

console.log(path.parse(__dirname));
console.log(path.parse(__filename));
