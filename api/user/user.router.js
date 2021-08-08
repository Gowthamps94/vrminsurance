const { getPolicyHolderList, createPolicyHolder } = require("./user.controller");
const router = require('express').Router();

router.get('/getPolicyHolderList', getPolicyHolderList);
router.post('/createPolicyHolder', createPolicyHolder);

module.exports = router;