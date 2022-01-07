const db = require('../../database');

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${orderBy}`);
    return rows;
  }

  async findById(id) {
    const rows = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return rows;
  }

  async findByEmail(email) {
    const [rows] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return rows;
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

  async update(id, {
    name, email, phone, categoryId,
  }) {
    const [row] = await db.query(`
      UPDATE contacts
      SET name = $1, email = $2, phone = $3, categoryId = $4
      WHERE id = $5
      RETURNING *
    `, [name, email, phone, categoryId, id]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM contacts WHERE id = $1', [id]);
    return deleteOp;
  }
}

module.exports = new ContactsRepository();
