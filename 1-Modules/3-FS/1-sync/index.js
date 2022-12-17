const fs = require("fs");
const path = require("path");

// Instead of using = __dirname/../docs/simple.txt
// use => path.join
// because depending upon the OS, fowardslash(/) or backslash(\) seprator can differ

const data = fs.readFileSync(
  path.join(__dirname, "..", "docs", "simple.txt"),
  "utf-8"
);

fs.writeFileSync(
  path.join(__dirname, "..", "docs", "generate.txt"),
  "This file was created using nodejs."
);

// If generate.txt doesn't exist, node will create it.
fs.appendFileSync(
  path.join(__dirname, "..", "docs", "generate.txt"),
  "\n\n\n This text is appended using nodejs"
);

// Check if directory exists else Make directory
if (!fs.existsSync("./new")) {
  fs.mkdirSync("./new");
}
