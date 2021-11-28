const fs = require("fs/promises");
const path = require("path");

const { v4: uuidv4 } = require("uuid");
const contactsPath = path.resolve("./db/contacts.json");
// const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contactsList = JSON.parse(data);
    console.table(contactsList);
    return contactsList;
  } catch (error) {
    throw error.message;
  } finally {
  }
}

async function getContactById(contactId) {
  try {
    const contactsList = await listContacts();
    const contact = await contactsList.find((item) => item.id === contactId);
    if (!contact) {
      throw new Error(`Contact with id=${contactId} not found`);
    }
    console.log(contact);
    return contact;
  } finally {
  }
}

async function removeContact(contactId) {
  try {
    const contactsList = await listContacts();
    const contactIndex = await contactsList.findIndex(
      (el) => el.id === contactId
    );

    if (contactIndex === -1) {
      throw new Error(`Contact with id=${contactId} not found`);
    }

    const removedContact = await contactsList.splice(contactIndex, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contactsList));

    console.log(removedContact);
    return removedContact;
  } catch (error) {
    throw error.message;
  }
}

async function addContact(name, email, phone) {
  try {
    const contactsList = await listContacts();
    const newContact = { name, email, phone, id: uuidv4() };
    await contactsList.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contactsList));
    console.log(newContact);
    return newContact;
  } catch (error) {
    throw error.message;
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
