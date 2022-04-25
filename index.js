const express = require('express'),
  path = require('path'),
  app = express(),
  port = 3000;

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
