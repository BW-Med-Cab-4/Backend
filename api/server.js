const express = require('express');
const cors = require('cors')
const helmet = require('helmet');


const authenticate = require('../auth/authenticate-middleware.js').authenticate;
const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/user-router.js');
const recommendationsRouter = require('../users/recommendations-router.js')
const inputRouter = require('../users/input-router.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, userRouter);
server.use('/api/recommendations', authenticate, recommendationsRouter)
server.use('/api/inputs', authenticate, inputRouter);

server.get('/', (req, res) =>{
    res.status(200).json({message: 'pinged'})
})

module.exports = server;