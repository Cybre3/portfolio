require("dotenv").config();
const router = require("express").Router();

router.post("/contact", async (req, res) => {
  let { name, email, message } = req.body;

  if (name.length === 0 || email.length === 0 || message.length === 0) {
    return res.json({ msg: "Please fill out the fields" });
  }

  try {
    if (res.status === 400) res.json({ msg: "Please fill out the fields" });
    res.status(200).json({ msg: "Your developer will reach out to you shortly!" });
  } catch (error) {
    if (error) return res.status(500).json({ msg: "There is server error" });
  }
});

module.exports = router;

