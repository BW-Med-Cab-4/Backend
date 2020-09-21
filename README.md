# Backend

Heroku user api server
https://med-cab-user.herokuapp.com/

Registration

https://med-cab-user.herokuapp.com/api/auth/register

requires object with user info
example:

{
    "email": "hello@gmail.com",
    "firstname": "testname",
    "lastname": "testname",
    "phone": 6096094321,
    "password": "testpass"
}

returns user and token

{
    "data": {
        "id": 8,
        "email": "hello223323ere331@gmail.com",
        "firstname": "miranda",
        "lastname": "burt",
        "phone": 2346092335,
        "password": "$2a$08$lXLHYOk5ulilfXImS24NZusxhxXNBO8tCLXG6jk82QWiSoZvMnpK6"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvMjIzMzIzZXJlMzMxQGdtYWlsLmNvbSIsInN1YmplY3QiOjgsImlhdCI6MTYwMDcyMTM3NCwiZXhwIjoxNjAwNzUwMTc0fQ.PxNcbJ2qV_G9GLCQiKgOd-cmfllitWoCxMn34ucuD2Y"
}


Login

https://med-cab-user.herokuapp.com/api/auth/login

requires object with email and password

{
    "email": "hello@gmail.com",
    "password": "testpass"
}

returns token

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvMjIzMzIzZXJlMzMxQGdtYWlsLmNvbSIsInN1YmplY3QiOjgsImlhdCI6MTYwMDcyMTU5NiwiZXhwIjoxNjAwNzUwMzk2fQ.5LjCbdavlhBhJantZoyA2Gzm0umvRtrpWJY3EFd1CWI"
}