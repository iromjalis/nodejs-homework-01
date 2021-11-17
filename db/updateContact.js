const getAll = require("./getAll");
const update = require("./update");

const updateContact = async (id, data) => {
  const contacts = await getAll();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { ...data, id };
  await update(contacts);

  return contacts[idx];
};
module.exports = updateContact;
