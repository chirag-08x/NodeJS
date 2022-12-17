// While reading a large file it's better to read it in chunks/parts instead reading it fully at one time, for that we use Streams

const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream("./lorem.txt", { encoding: "utf-8" });

rs.on("data", (chunk) => {
  console.log(
    "--------------------------------------------NEW CHUNK-------------------------------------------"
  );
  console.log(chunk);
  console.log(`\n\n\n`);
});
