// To tackle CALLBACK HELL, we can use fs promises.
const fs = require("fs/promises");
const path = require("path");

const helper = async () => {
  try {
    await fs.writeFile(
      path.join(__dirname, "..", "docs", "final.txt"),
      "This file is created using nodejs/promises"
    );
    const data = await fs.readFile(
      path.join(__dirname, "..", "docs", "final.txt"),
      "utf-8"
    );
    console.log(data);
    await fs.appendFile(
      path.join(__dirname, "..", "docs", "final.txt"),
      "\n\nThis is an appended text"
    );
  } catch (error) {
    throw new Error(error);
  }
};

helper();
