let users = require('../mocks/users');


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
    const lastUserId = users[users.length - 1].id;
    const newUser = {
      id: lastUserId + 1,
      name: request.body.name
    }

    users.push(newUser);

    response.send(200, newUser);
  },

  updateUser(request, response) {
    let { id } = request.params;
    const { name } = request.body;

    id = Number(id);
    const userExists = users.find((user) => user.id === id);

    if (!userExists) {
      return response.send(400, { error: 'User not found' });
    }
    users = users.map((userObj) => {
      if (userObj.id === id) {
        return {
          ...userObj,
          name: name
        }
      }
      return userObj;
    });
    response.send(200, { id, name })
  },

  deleteUser(request, response) {
    let { id } = request.params;
    id = Number(id);

    const userExists = users.find((user) => user.id === id);

    if (!userExists) {
      return response.send(400, { error: 'User not found' });
    }

    users = users.filter((userObj) => userObj.id !== id);

    response.send(200, { deleted: true });
  }
}