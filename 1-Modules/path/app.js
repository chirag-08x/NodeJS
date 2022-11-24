const path = require("node:path");

console.log(path.sep);

// Returns the last portion of the path
console.log(path.basename(__dirname));

// Returns the directory name of a path
console.log(path.dirname(__dirname));

// Joins the Path
console.log(path.join("/foo", "/bar", "/baz/asdc", "/abc.txt"));
