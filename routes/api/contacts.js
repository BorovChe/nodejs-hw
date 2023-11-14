const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middllewares");

const {schemas} = require("../../models/contact");

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:id", isValidId, ctrl.deleteContact);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateContact);

router.patch("/:id/favorite", isValidId, validateBody(schemas.updateFavoriteSchemas), ctrl.updateStatusContact);


module.exports = router;
