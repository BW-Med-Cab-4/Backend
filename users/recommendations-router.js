const express = require('express');
const db = require('./recommendations-model');
const router = express.Router();

router.get('/', (req, res) =>{
    db.find()
    .then(set=> {
      res.status(200).json(set);
    })
    .catch(error => {
        console.log(error)
      res.status(500).json({ error: error.message });
    });
})

router.get("/:userid", (req, res) => {
    const userId = req.params
    console.log(userId)
    db.findBy(userId)
      .then((user) => {
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: "That recommendation wasn't found." });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  });


module.exports = router