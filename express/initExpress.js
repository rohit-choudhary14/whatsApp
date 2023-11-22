const express = require('express');
const app = express();
const cors = require('cors');
const cookieparser=require("cookie-parser");
const bodyParser = require('body-parser');
const pathToPublic=require("path");
const staicFilePath=pathToPublic.join(__dirname,"../public/static")
// Set the view engine to EJS
app.set('view engine', 'ejs');
app.use(cookieparser());
// Set the directory for your EJS templates
app.set('views',staicFilePath);
// Serve static files from the 'public' directory

app.use(express.static(staicFilePath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use('/uploads', express.static('uploads'));
module.exports={app};