const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const UserController = require('./controllers/UserController');
const ContactController = require('./controllers/ContactController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required(),
    }),
}), SessionController.create);

routes.get('/users', UserController.index);

routes.post('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        age: Joi.string().required(),
        gender: Joi.string().required(),
        password: Joi.string().required(),
    }),
}), UserController.create);

routes.get('/contacts', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}), ContactController.index);

routes.post('/contacts', celebrate({
/*
    [Segments.HEADERS]: Joi.object({
        Authorization: Joi.object().required(),
    }).unknown(),
*/
    [Segments.BODY]: Joi.object().keys({
        quando: Joi.string().required(),
        onde: Joi.string().required(),
        como: Joi.string().required(),
    }),
}), ContactController.create);

routes.delete('/contacts/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}), ContactController.delete);

routes.get('/profile', /* celebrate({
    [Segments.HEADERS]: Joi.object({
        Authorization: Joi.number().required(),
    }).unknown(),
}), */ProfileController.index);

module.exports = routes;