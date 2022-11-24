const fs = require("node:fs");

// ReadFile
const data = fs.readFileSync(`${__dirname}/docs/read.txt`, "utf-8");
console.log(data);

// WriteFile
// We need to stringify the data, coz we can only write string type data to the file.
fs.writeFileSync(
  `${__dirname}/docs/write.txt`,
  JSON.stringify({ name: "chirag", age: 21 })
);

// AppendFile
fs.appendFileSync(
  `${__dirname}/docs/write.txt`,
  JSON.stringify({ name: "akshat", age: 20 })
);
console.log("hello world");
