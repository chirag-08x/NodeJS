const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "..", "docs", "simple.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

fs.writeFile(
  path.join(__dirname, "..", "docs", "new.txt"),
  "This file is created using nodejs",
  (err) => {
    if (err) throw err;
  }
);

fs.appendFile(
  path.join(__dirname, "..", "docs", "new.txt"),
  "\n\n\nThis is an appended text.",
  (err) => {
    if (err) throw err;
  }
);

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
  });
}
