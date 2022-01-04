const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Antônio',
    email: 'antonio.gally@gmail.com',
    phone: '1199999999',
    categoryId: v4(),
  },
  {
    id: v4(),
    name: 'Jorge',
    email: 'jorge@gmail.com',
    phone: '1199229999',
    categoryId: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contactObj) => contactObj.email === email),
    ));
  }

  create(info) {
    return new Promise((resolve) => {
      contacts.push({ id: v4(), ...info });
      resolve(contacts[contacts.length - 1]);
    });
  }

  update(id, info) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        ...info,
      };
      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));
      resolve(updatedContact);
    });
  }
}

module.exports = new ContactsRepository();
