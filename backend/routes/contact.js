const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // <-- Import your model

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save(); // <-- Save to MongoDB

    console.log('📩 Contact form submitted:', req.body);
    res.status(200).json({ success: true, message: 'Message received!' });
  } catch (err) {
    console.error('❌ Error saving contact form:', err);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;
