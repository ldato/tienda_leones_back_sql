const router = require("express").Router();
const {createRole, getRoles, getRole, deleteRole} = require("../controllers/rolesController");

router.post('/', createRole);

router.get('/', getRoles);

router.get('/:id', getRole);

router.delete('/:id', deleteRole);



module.exports = router;