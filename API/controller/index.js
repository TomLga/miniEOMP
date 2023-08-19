const express = require('express')
const bodyParser = require('body-parser')
const setRoutes = express.Router()
const {products, user} = require('../model')

setRoutes.get('/products', (req, res) =>{
    products.fetchProducts(req, res)
})

setRoutes.get('/product/:id', (req, res)=>{
    products.fetchProduct(req, res)
})
setRoutes.post('/productAdd',(req, res)=>{
    products.addProduct(req, res)
})

setRoutes.put('/product/:id', bodyParser.json(),(req, res)=>{
    products.updateProduct(req, res)
})

setRoutes.patch('/product/:id', bodyParser.json(),(req, res)=>{
    products.updateProduct(req, res)
})
setRoutes.delete('/product/:id',(req, res)=>{
    products.deleteProduct(req, res)
})



// users 

setRoutes.get('/users', (req, res) =>{
    user.fetchUsers(req, res)
})

setRoutes.get('/user/:id', (req, res)=>{
    user.fetchUser(req, res)
})
setRoutes.post('/userAdd',(req, res)=>{
    user.addUser(req, res)
})

setRoutes.put('/user/:id', bodyParser.json(),(req, res)=>{
    user.updateUser(req, res)
})

setRoutes.patch('/user/:id', bodyParser.json(),(req, res)=>{
    user.updateUser(req, res)
})
setRoutes.delete('/User/:id',(req, res)=>{
    user.deleteUser(req, res)
})






module.exports ={
    express,
    setRoutes
}