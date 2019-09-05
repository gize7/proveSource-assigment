const express = require("express");
const router = express.Router();
//Notification Model
const Notification = require("../../models/notification/notification");

//@route POST /notifications
router.post("/", async (req, res) => {
    const { accountId, name, color } = req.body;

    let notification = new Notification({ accountId, name, color });
    await notification.save();
    return res.send({ message: "success" });
});
//@route GET /notifications?accountId
router.get("/", (req, res) => {

    const accountId = req.query.accountId;
    Notification.find({ accountId })
        .then(doc => {
            console.log("Notifications from the database", doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({ message: "was not found data for this ID" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

//@route DELETE /notifications?accountId={id}&color={color}"
router.delete("/", (req, res) => {
    const accountId = req.query.accountId;
    const color = req.query.color;
    Notification.deleteMany({ accountId, color })
        .then(result => {
            if (result.n > 0) {
                res.status(200).json(result);
            }
        })
        .catch(err => {
            res.status().json({
                error: err
            });
        });

});

module.exports = router;