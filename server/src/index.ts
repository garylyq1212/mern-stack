import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(5000, () => console.log('Server listening on http://localhost:5000'));