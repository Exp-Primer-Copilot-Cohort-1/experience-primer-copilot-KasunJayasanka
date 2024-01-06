// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const jwtSecret = '1234567890';

// Create express app
const app = express();

// Import comments data
const COMMENTS_FILE = './data/comments.json';
let comments = JSON.parse(fs.readFileSync(COMMENTS_FILE, 'utf8'));

// Configure express app
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors());

// Use JWT auth to secure the api
app.use(expressJwt({secret: jwtSecret}).unless({path: ['/api/auth']}));

// Create routes
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

app.post('/api/comments', (req, res) => {
  const newComment = {
    id: Date.now(),