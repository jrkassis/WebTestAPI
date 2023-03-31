// var express = require('express')
// var cors = require('cors')
// var app = express()

// app.use(cors())

fetch("https://jrkapitest.onrender.com/")
  .then((response) => response.json())
  .then((data) => console.log(data));

