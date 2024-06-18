const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const fetchuser = require('../middleware/fetchuser');
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "mynameissohitandiamagoodboy";




// Create a User using: POST "/api/auth/createuser". No login required

router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
], async (req, res) => {
  // Validate request data
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Check whether the user with this email exists already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry, a user with this email already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    user = await User.create({
      name: req.body.name,
      password: hashedPassword,
      email: req.body.email,
    });

    // Create JWT token
    const data = { user: { id: user.id } };
    const authToken = jwt.sign(data, JWT_SECRET);
    res.json({ authToken });



  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});






// Login a User using: POST "/api/auth/login". No login required

router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  // Validate request data
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    // Find user by email
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Email is not registered" });
    }

    // Compare password
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ error: "You entered a wrong password" });
    }

    // Create JWT token
    const data = { user };
    const token = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });

    // Respond with the JWT token
    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred while logging in");
  }
});



//getUser using: POST "/api/auth/getuser". login required


router.get('/getuser',  fetchuser, async (req, res) => {
  // Validate request data
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const userId = req.user; 
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

module.exports = router;
