const getAll = require("./getAll");
const update = require("./update");

const removeContact = async (id) => {
  const contacts = await getAll();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  const newContact = contacts.filter((_, index) => index !== idx);
  await update(newContact);
  return contacts[idx];
};
module.exports = removeContact;
