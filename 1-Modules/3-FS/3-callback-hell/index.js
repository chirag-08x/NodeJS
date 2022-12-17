const fs = require("fs");
const path = require("path");

// If the file exists, then only append will take palce, and if append successfully took place then rename will take place.
// CALLBACK HELL
fs.readFile(
  path.join(__dirname, "..", "docs", "testing.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
    fs.appendFile(
      path.join(__dirname, "..", "docs", "testing.txt"),
      `\n\n${data}`,
      (err) => {
        if (err) throw err;
        console.log("append complete");
        fs.rename(
          path.join(__dirname, "..", "docs", "testing.txt"),
          path.join(__dirname, "..", "docs", "rename.txt"),
          (err) => {
            if (err) throw err;
            console.log("Rename completed");
          }
        );
      }
    );
  }
);
