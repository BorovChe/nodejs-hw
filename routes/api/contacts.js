const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middllewares");

const {schemas} = require("../../models/contact");

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:id", authenticate, isValidId, ctrl.deleteContact);

router.put("/:id", authenticate, isValidId, validateBody(schemas.addSchema), ctrl.updateContact);

router.patch("/:id/favorite", authenticate, isValidId, validateBody(schemas.updateFavoriteSchemas), ctrl.updateStatusContact);


module.exports = router;
