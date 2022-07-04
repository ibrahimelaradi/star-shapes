const fs = require("fs");

let content = "";

module.exports = {
  printf: (message) => {
    content += message;
    process.stdout.write(message);
  },
  flush: (path) => {
    fs.writeFileSync(path, content);
    content = "";
  },
};
