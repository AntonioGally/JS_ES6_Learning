const users = require('../mocks/users');


module.exports = {
  listUsers(request, response) {
    const { order } = request.query;
    const sortedUsers = users.sort((a, b) => {
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1;
      }
      return a.id > b.id ? 1 : -1;
    });

    response.send(200, sortedUsers);
  },
  getUserById(request, response) {
    const { id } = request.params;

    const filteredUser = users.find((el) => { return el.id == id });

    if (!filteredUser) {
      return response.send(400, { error: 'User not found' });
    }

    response.send(200, filteredUser);

  },
  createUser(request, response) {

    let body = '';



    request.on('data', (chunk) => {
      body += chunk;
    });

    request.on('end', () => {
      body = JSON.parse(body);

      const lastUserId = users[users.length - 1].id;
      const newUser = {
        id: lastUserId + 1,
        name: body.name
      }

      users.push(newUser);

      response.send(200, newUser);
    })
  }
}