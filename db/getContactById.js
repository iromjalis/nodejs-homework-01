const getAll = require("./getAll");

const getContactById = async (id) => {
  const contacts = await getAll();
  const result = contacts.find((item) => item.id === id);
  if (!result) {
    return null;
  }
  return result;
};

module.exports = getContactById;
