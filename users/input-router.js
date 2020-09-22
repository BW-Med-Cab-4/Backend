const express = require('express');
const db = require('./input-model.js');
const router = express.Router();

router.get('/', (req, res) =>{
    db.find()
    .then(input=> {
      res.status(200).json(input);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
})

router.get("/:userid", (req, res) => {
    const userId = req.params
    db.findBy(userId)
      .then(input => {
        if (input) {
          res.status(200).json(input);
        } else {
          res.status(404).json({ message: "The user input wasn't found." });
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
      .then(input=> {
        input ?
        db.update(id, updates)
        .then(input => {
            res.status(200).json({message: 'Input Updated', userInput: input});
          })
          .catch(err => {
            res.status(500).json({message: "Unable to update user input", error: err});
          })
        : res.status(404).json({ message: "Unable to find user input" });
    })
})

//need to verify if user exists
router.post('/', (req, res) =>{
    const set = req.body;
    db.add(set)
    .then(set =>{
        res.status(200).json({message: 'Added user input', input: set})
    })
    .catch(err =>{
        res.status(500).json({message: 'Unable to add user input', error: err})
    })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
  
    db.findById(id)
      .then(set=> {
        set ?
        db.remove(id)
            .then(inputRes =>{
                res.status(202).json({message: 'User input Deleted'})
            })
            .catch(err =>{
                res.status(500).json({message: 'User input could not be deleted', error: err})
            })
        : res.status(404).json({message: 'User input not found'})
      })
      .catch((error) => {
        res.status(500).json({error: error.message});
      });
  });
module.exports = router