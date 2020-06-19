const express = require('express')
const cors = require('cors')
const app = express()
const port = 2020
const conn = require('./config/db')
const bcrypt = require('bcrypt')
const path = require('path')
const multer = require('multer')
const sharp = require('sharp')
const shortid = require('shortid')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('<h1>API IS RUNNING AT 2020</h1>')
 })
 
 app.post('/title', (req, res) => {
    const sql = `INSERT INTO films SET ?`

    const data = req.body
 
 
    conn.query(sql, data, (err, result) => {
       if(err) return res.status(500).send({err})
 
       res.status(200).send({message: "Film Ditambahkan"})
    })
 
 })
 

 app.listen(port, () => console.log('API is Running at ' + port))

