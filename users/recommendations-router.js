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

router.put('/:id', (req, res) =>{
    const id = req.params.id
    const userId = req.body.userid
    const updates = req.body;
  
    db.findById(id)
      .then(user=> {
        user ?
        db.update(id, updates)
        .then(user => {
            res.status(200).json({message: 'Recommendation Updated', user: user});
          })
          .catch(err => {
            res.status(500).json({message: "Unable to update Recommendation", error: err});
          })
        : res.status(404).json({ message: "Unable to find Recommendation" });
    })
})

router.post('/', (req, res) =>{
    const set = req.body;
    db.add(set)
    .then(set =>{
        res.status(200).json({message: 'Added Recommendation', rec: set})
    })
    .catch(err =>{
        res.status(500).json({message: 'Unable to add recommendation', error: err})
    })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
  
    db.findById(id)
      .then(set=> {
        set ?
        db.remove(id)
            .then(remRes =>{
                res.status(202).json({message: 'Recommendation Deleted'})
            })
            .catch(err =>{
                res.status(500).json({message: 'Recommendation could not be deleted', error: err})
            })
        : res.status(404).json({message: 'Recommendation not found'})
      })
      .catch((error) => {
        res.status(500).json({error: error.message});
      });
  });
module.exports = router