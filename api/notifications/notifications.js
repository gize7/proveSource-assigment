const express = require("express");
const router = express.Router();
//Notification Model
const Notification = require("../../models/notification/notification");

//@route POST api/notifications
router.post("/", async (req, res) => {
    const { accountId, name, color } = req.body;

    let notification = new Notification({ accountId, name, color });
    await notification.save();
    return res.send({ message: "success" });
});


module.exports = router;