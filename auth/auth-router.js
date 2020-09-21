const bcryptjs = require("bcryptjs");

const router = require("express").Router();

const Users = require("../users/user-model");
const { isValid, makeJwt } = require("../auth/authenticate-middleware.js");

router.post('/register', (req, res) => {
    const credentials = req.body;
  
    if (isValid(credentials)) {
        const rounds = process.env.BCRYPT_ROUNDS || 8;
  
        // hash the password
        const hash = bcryptjs.hashSync(credentials.password, rounds);
  
        credentials.password = hash;
  
        // save the user to the database
        Users.add(credentials)
            .then(user => {
                const token = makeJwt(user);
  
                res.status(201).json({ data: user, token });
            })
            .catch(error => {
                res.status(500).json({ message: error.message });
            });
    } else {
        res.status(400).json({
            message: "please provide username and password and the password shoud be alphanumeric",
        });
    }
  });

  router.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    if (isValid(req.body)) {
        Users.findBy({ username: username })
            .then(([user]) => {
                if (user && bcryptjs.compareSync(password, user.password)) {
                    const token = makeJwt(user);
                    res.status(200).json({ token });
                } else {
                    res.status(401).json({ message: "Invalid credentials" });
                }
            })
            .catch(error => {
                res.status(500).json({ message: error.message });
            });
    } else {
        res.status(400).json({
            message: "please provide username and password and the password shoud be alphanumeric",
        });
    }
  });

  module.exports = router;