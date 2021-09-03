const fs = require("fs");
const path = require("path");

const readInput = async (inputPath) => {
  const fullPath = path.resolve(__dirname, `../input/${inputPath}`);
  return fs.readFileSync(fullPath, "utf8", (err, data) => {
    if (!err) {
      return data;
    } else {
      console.error(err);
    }
  });
};

module.exports = { readInput };
