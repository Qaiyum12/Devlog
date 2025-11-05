const Joi = require('joi');

module.exports.blogSchema = Joi.object({
    blog : Joi.object({     
        category: Joi.string().required(),
        title: Joi.string().required(),
        image: Joi.string().allow('', null),
        content: Joi.string().required(),
    }).required()
});