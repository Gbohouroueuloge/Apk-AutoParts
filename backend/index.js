require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const categorieRouter = require('./routes/categories');
const articleRouter = require('./routes/articles');

app.use(cors());
app.use(express.json());

app.use('/api/categories', categorieRouter);
app.use('/api/articles', articleRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => 
  console.log(`Server demarer sur http://localhost:${PORT}`)
);