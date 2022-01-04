const { Router } = require('express');

const ContactController = require('./app/controller/ContactController');

const router = Router();

router.get(
  '/contacts',
  (request, resolve, next) => {
    request.appId = 'MeuAppId';
    next();
  },
  ContactController.index,
);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);

module.exports = router;
