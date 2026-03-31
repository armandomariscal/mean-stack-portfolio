require('dotenv').config(); // 1. Load the .env file
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

// 2. Connect using the variable
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB via .env!'))
  .catch(err => console.error('Database connection error:', err));

const cvSchema = new mongoose.Schema({
  name: String,
  role: String,
  skills: [String]
});

const Cv = mongoose.model('Cv', cvSchema, 'profile');

app.get('/api/cv', async (req, res) => {
  try {
    const data = await Cv.findOne(); 
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch CV' });
  }
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));