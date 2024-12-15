const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware'); // Assuming you have an auth middleware

router.get('/', protect, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

module.exports = router;