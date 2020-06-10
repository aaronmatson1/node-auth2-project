const express = require("express");
const Users = require("./users-model");
const restrict = require("../middleware/restrict");

const router = express.Router();

router.get("/", restrict("Information Technology"), async (req, res, next) => {
    try {
        res.json(await Users.find());
    } catch {
        next(err);
    }
})


// router.get("/", (req, res) => {
//   Users.find()
//     .then((users) => {
//       res.json(users);
//     })
//     .catch((err) => {
//       res.status(500).json({
//         errorMessage: "Ooops! Something went wrong",
//       });
//     });
// });

module.exports = router;