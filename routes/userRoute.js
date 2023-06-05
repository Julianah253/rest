const express = require('express')
const router = express.Router()
const userModel = require('../model/userModel')


router.get('/users', (request, response) => {
    userModel.find()
    .then(user => {
        response.json(user)
    })
    .catch(error => {
        response.status(500).json({
            error: error.message
        })
    })
})

router.post('/users', (request, response) => {
    const newUser = new userModel({
        name: request.body.name,
        email: request.body.email,
        phone: request.body.phone,
        address: request.body.address,
        job: request.body.job,
        age: request.body.age,
    });
    
    newUser.save()
    .then(user => {
        response.status(201).json(user)
    })
    .catch(error => {
        response.status(400).json({
            error: error.message
        })
    })
})

router.put('/users/:id', (request, response) => {
    response.send(
        {
            type: "PUT"
        }
    )
})

router.delete('/users/:id', (request, response) => {
    response.send(
        {
            type: "DELETE"
        }
    )
})

module.exports  = router