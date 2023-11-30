const {Schema, model} = require('mongoose');
const {handleMongooseError} = require('../helpers')
const Joi = require("joi");

const bookSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
      favorite: {
        type: Boolean,
        default: false,
      },
      owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        require: true,
      }
});

bookSchema.post("save", handleMongooseError)

const addSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string().min(3).max(14).required(),
  favorite: Joi.boolean(),
});

const updateFavoriteSchemas = Joi.object({
  favorite: Joi.boolean().required(),
})


const schemas = {
  addSchema,
  updateFavoriteSchemas,
}

const Contact = model('contact', bookSchema);

module.exports = {
  Contact,
  schemas,
};