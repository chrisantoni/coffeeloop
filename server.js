const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")

const app = express()
const router = express.Router();

const index = require('./routes/index.js')


app.set('port',3000)

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

app.use(express.static(path.join(__dirname,"public")))

app.use(bodyParser.urlencoded({
  extended:false
}))

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "no-cache");
  next();
});

app.use('/',index)

app.listen(app.get('port'),function(){
    console.log(`App started on port ${app.get('port')}`);
})
