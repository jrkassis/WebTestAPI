var express = require('express')
var cors = require('cors')
app.use(cors())
var app = express()

fetch("https://jrkapitest.onrender.com/")
  .then((response) => response.json())
  .then((data) => console.log(data));

