const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.params;
    const direction = orderBy?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const categories = await CategoriesRepository.findAll(direction);

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await CategoriesRepository.findById(id);
    if (!category) {
      return response.status(400).json({ error: 'This category does not exists' });
    }
    response.send(category);
  }

  async store(request, response) {
    const { name } = request.body;
    if (!name) {
      response.status(400).json({ error: 'Name is required' });
    }
    const categoryExists = await CategoriesRepository.findByName(name);
    if (categoryExists) {
      response.status(400).json({ error: 'This name is already in use' });
    }
    const category = await CategoriesRepository.create(name);

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    const category = await CategoriesRepository.findById(id);
    if (!category) {
      return response.status(400).json({ error: 'This category does not exists' });
    }
    await CategoriesRepository.delete(id);
    response.sendStatus(204);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;
    const categoryId = await CategoriesRepository.findById(id);
    const categoryName = await CategoriesRepository.findByName(name);
    if (!categoryId) {
      return response.status(400).json({ error: 'This category does not exists' });
    }
    if (categoryName && categoryName.id !== id) {
      return response.status(400).json({ error: 'This category is already in use' });
    }
    const category = await CategoriesRepository.update(id, name);
    response.send(category);
  }
}

module.exports = new CategoryController();
