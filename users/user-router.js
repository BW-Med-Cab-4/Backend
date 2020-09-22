const express = require('express');
const db = require('./user-model.js');
const router = express.Router();

router.get('/', (req, res) =>{
    db.find()
    .then(users=> {
      res.status(200).json(users);
    })
    .catch(error => {
        console.log(error)
      res.status(500).json({ error: error.message });
    });
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    db.findById(id)
      .then((user) => {
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: "That user wasn't found." });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  });

router.put('/:id', (req, res) =>{
    const id = req.params.id;
    const updates = req.body;
  
    db.findById(id)
      .then(user=> {
        user ?
        db.update(id, updates)
        .then(user => {
            res.status(200).json({message: 'User Updated', user: user});
          })
          .catch(err => {
            res.status(500).json({message: "Unable to update user", error: err});
          })
        : res.status(404).json({ message: "Unable to find user" });
    })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
  
    db.findById(id)
      .then(user=> {
        user ?
        db.remove(id)
            .then(remRes =>{
                res.status(202).json({message: 'User Deleted'})
            })
            .catch(err =>{
                res.status(500).json({error: 'User could not be deleted', err})
            })
        : res.status(404).json({message: 'User not found'})
      })
      .catch((error) => {
        res.status(500).json({error: error.message});
      });
  });

module.exports = router