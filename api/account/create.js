const Account = require("../../models/account/Account");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
	const { email, name, age } = req.body;
	let account = await Account.findOne({ email });
	account = new Account({ email, name, age });
	await account.save();
	return res.send({ message: "success" });
});
module.exports = router;