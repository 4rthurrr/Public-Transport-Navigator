const express = require("express");
const router = express.Router();

router.get("/example", (req, res) => {
    res.send("This is an example route.");
});

module.exports = router;
