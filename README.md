# Backend

Heroku user api server
https://med-cab-user.herokuapp.com/

Registration

POST
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

POST
https://med-cab-user.herokuapp.com/api/auth/login

requires object with email and password

{
    "email": "hello@gmail.com",
    "password": "testpass"
}

returns id and token

{
    "id": 2,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvQGdtYWlsLmNvbSIsInN1YmplY3QiOjIsImlhdCI6MTYwMDczMTQ0NiwiZXhwIjoxNjAwNzYwMjQ2fQ.IeavAEHzvcwBxcRcAz57Fhb_9WJAwL7219RPpssVDP0"
}


Users
https://med-cab-user.herokuapp.com/api/users

GET
api/users

returns a list of all users
Example:
[
    {
        "id": 1,
        "email": "testemail@gmail.com",
        "firstname": "testname",
        "lastname": "testname",
        "phone": 6096091234,
        "password": "testpass"
    },
    {
        "id": 2,
        "email": "test1223email@gmail.com",
        "firstname": "testname",
        "lastname": "testname",
        "phone": 1236091234,
        "password": "$2a$08$WGK85UQFJK6G1pRCuB01WO2/n//4JhR2dXx2rApMYQ2dsNQeN4zmq"
    }
]

GET
api/users/:id

returns specified users by ID
Example:

{
    "id": 2,
    "email": "test1223email@gmail.com",
    "firstname": "testname",
    "lastname": "testname",
    "phone": 1236091234,
    "password": "$2a$08$WGK85UQFJK6G1pRCuB01WO2/n//4JhR2dXx2rApMYQ2dsNQeN4zmq"
}

PUT
api/users/:id

updates specified user fields by ID and returns updated user(requires user object)
example:

send
{
    "id": 1,
    "email": "testemail@gmail.com",
    "firstname": "michael",
    "lastname": "hernandez",
    "phone": 6096091234,
    "password": "newpass"
}

recieve
{
    "message": "User Updated",
    "user": {
        "id": 1,
        "email": "testemail@gmail.com",
        "firstname": "michael",
        "lastname": "hernandez",
        "phone": 6096091234,
        "password": "newpass"
    }
}

DELETE
api/users/:id

DELETES USER then returns success message
Example:

{
    "message": "User Deleted"
}


Inputs
https://med-cab-user.herokuapp.com/api/inputs

GET
api/inputs

Retrieves all user inputs
Example:

[
    {
        "id": 1,
        "userid": 1,
        "effect": "happy",
        "ailment": "insomnia",
        "flavor": "cherry",
        "type": "unknown"
    },
    {
        "id": 2,
        "userid": 2,
        "effect": "sad",
        "ailment": "fatigue",
        "flavor": "blueberry",
        "type": "unknown"
    }
]

GET
api/inputs/:userid

retrieve all inputs from specified user
Example:

[
    {
        "id": 1,
        "userid": 1,
        "effect": "happy",
        "ailment": "insomnia",
        "flavor": "cherry",
        "type": "unknown"
    }
]

PUT
api/inputs/:id

Update specified input based off of input ID
Example:

send
{
    "id": 1,
    "userid": 1,
    "effect": "happy",
    "ailment": "insomnia",
    "flavor": "cherry",
    "type": "unknown"
}

recieve
{
    "message": "Input Updated",
    "userInput": {
        "id": 1,
        "userid": 1,
        "effect": "happy",
        "ailment": "insomnia",
        "flavor": "cherry",
        "type": "test"
    }
}

POST
api/inputs

Add User input
Example:

send
{
    "userid": 1,
    "effect": "happy",
    "ailment": "insomnia",
    "flavor": "cherry",
    "type": "this type"
}

recieve
{
    "message": "Added user input",
    "input": {
        "id": 3,
        "userid": 1,
        "effect": "happy",
        "ailment": "insomnia",
        "flavor": "cherry",
        "type": "this type"
    }
}

DELETE
api/inputs/:id

DELETES USER INPUT
Example:

{
    "message": "User input Deleted"
}

Recommendations
https://med-cab-user.herokuapp.com/api/recommendations

GET
api/recommendations

retrieve all recommendations 
Example:

[
    {
        "id": 1,
        "userid": 1,
        "strain": "strain",
        "description": "this is a description",
        "rating": 10
    },
        {
        "id": 2,
        "userid": 1,
        "strain": "strain",
        "description": "this is another description",
        "rating": 10
    }
]


GET
api/recommendations/:userid

retrieve all recommendations from specific user
Example:

[
    {
        "id": 1,
        "userid": 1,
        "strain": "strain",
        "description": "this is a description",
        "rating": 10
    }
]

PUT
api/recommendations/:id

Update specified recommendation
Example:

send
{
    "id": 1,
    "userid": 1,
    "strain": "strain",
    "description": "this is a description",
    "rating": 9
}

recieve
{
    "message": "Recommendation Updated",
    "user": {
        "id": 1,
        "userid": 1,
        "strain": "strain",
        "description": "this is a description",
        "rating": 9
    }
}

POST
api/recommendations

Add recommendation
Example:

send
{
    "userid": 1,
    "strain": "new strain",
    "description": "this is a description",
    "rating": 9
}

recieve:
{
    "message": "Added Recommendation",
    "rec": {
        "id": 2,
        "userid": 1,
        "strain": "new strain",
        "description": "this is a description",
        "rating": 9
    }
}

DELETE
api/recommendations/:id

DELETE RECOMMENDATION
Example:
{
    "message": "Recommendation Deleted"
}