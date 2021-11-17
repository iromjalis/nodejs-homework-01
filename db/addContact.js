const fs = require("fs/promises");
const { v4 } = require("uuid");
const getAll = require("./getAll");
const update = require("./update");

const addContact = async (data) => {
  const contacts = await getAll();
  const newContact = { ...data, id: v4() };

  contacts.push(newContact);
  await update(contacts);
  return newContact;
};

module.exports = addContact;
