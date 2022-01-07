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
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${direction}`);
    return rows;
  }

  async findById(id) {
    const rows = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return rows;
  }

  async findByEmail(email) {
    const rows = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return rows;
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
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
