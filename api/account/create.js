const Account = require("../../models/account/Account");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
	const { email, name, age } = req.body;
	let account = await Account.findOne({ email });
	if (account) return res.status(400).send({ error: "email already exist" });
	account = new Account({ email, name, age });
	await account.save();
	return res.send({ message: "success" });
});
module.exports = router;