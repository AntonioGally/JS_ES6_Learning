const { v4 } = require('uuid');

const db = require('../../database');

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

  async create({
    name, email, phone, categoryId,
  }) {
    const [row] = await db.query(`
    INSERT INTO contacts(name, email, phone, categoryId)
    VALUES($1, $2, $3, $4)
    RETURNING *
    `, [name, email, phone, categoryId]);

    return row;
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
