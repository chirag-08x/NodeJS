const fs = require("fs");

// Read File
fs.readFile(`${__dirname}/docs/data.json`, "utf-8", (err, data) => {
  if (data) {
    console.log(JSON.parse(data));
  } else {
    console.log(err);
  }
});

// Write File
const data = `lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum `;
fs.writeFile(`${__dirname}/docs/write.txt`, data, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File successfully written.");
});

// Append File
fs.appendFile(
  `${__dirname}/docs/append.txt`,
  "This is appended text",
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Data Successfully Appened.");
  }
);
console.log("hello world");
