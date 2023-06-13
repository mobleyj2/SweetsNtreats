const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_database_name'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});


app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');


app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Home page route
app.get('/login', (req, res) => {
  res.render('login');
});

// Login post route
app.post(
  '/login',
  [
    // Validate username and password
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required')
  ],
  (req, res) => {
    const { username, password } = req.body;

    // Server-side validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('login', { errors: errors.array() });
    }

    // Fetch user from database
    const query = 'SELECT * FROM users WHERE username = ?';
    connection.query(query, [username], (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        return res.sendStatus(500);
      }
      if (results.length === 0) {
        // User not found
        return res.render('login', { error: 'Invalid username or password' });
      }

      // Compare hashed passwords
      const user = results[0];
      bcrypt.compare(password, user.password, (bcryptErr, isMatch) => {
        if (bcryptErr) {
          console.error('Error comparing passwords:', bcryptErr);
          return res.sendStatus(500);
        }
        if (!isMatch) {
          // Authentication failed
          return res.render('login', { error: 'Invalid username or password' });
        }

        // Authentication succeeded
        res.render('dashboard', { username });
      });
    });
  }
);

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});