const express = require('express')
require('dotenv').config()
const  route  = require('./route')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(route)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})