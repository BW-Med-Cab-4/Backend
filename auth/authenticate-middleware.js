/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken')


// confirms whether the call to the api comes with valid token
function authenticate(req, res, next){
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET || "med-cab"

  if(token){
    jwt.verify(token,secret,(err, decodedToken) =>{
      err ?
      res.status(401).json({message: 'Token Not Authorized'})
      : req.jwt = decodedToken
      next()
    })
  }else{
    res.status(401).json({ message: 'Missing Token'});
  }
};

//checks to see if user object matches table user data structure
function isValid(user) {
  return Boolean(user.email && user.password && typeof user.password === "string");
}

//creates token based off of user information
function makeJwt({ id, email}) {
  const payload = {
      email,
      subject: id,
  };
  const config = {
      jwtSecret: process.env.JWT_SECRET || "med-cab",
  };
  const options = {
      expiresIn: "8 hours",
  };
  return jwt.sign(payload, config.jwtSecret, options)
}
module.exports = {
  authenticate,
  isValid,
  makeJwt,
}