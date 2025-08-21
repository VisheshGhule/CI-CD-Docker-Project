const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello I'm Vishesh a DevOps engineer' });
});

app.get('/healthz', (req, res) => {
  res.status(200).send('ok');
});

if (require.main === module) {
  app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
  });
}

module.exports = app;
