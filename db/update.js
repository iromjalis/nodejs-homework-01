const fs = require("fs/promises");
const contactsPath = require("./contactsPath");

const update = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
};
module.exports = update;
