require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./db.js');
const cors = require('cors');

app.use(cors());
app.get('/', (req, res) => {
  res.send('Welcome to backend server')
});

app.get('/api/student/:id', async (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM register65 WHERE id = ?';

  try {
    const [rows, field] = await db.query(sql, [id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});