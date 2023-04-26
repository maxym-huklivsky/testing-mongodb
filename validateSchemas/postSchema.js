const Joi = require('joi');

const postSchema = Joi.object({
  name: Joi.string().min(3).max(16).required().messages({
    'any.required': `missing required name field`,
  }),
  email: Joi.string().email().required().messages({
    'any.required': `missing required email field`,
  }),
  phone: Joi.string().required().messages({
    'any.required': `missing required phone field`,
  }),
});

module.exports = postSchema;
