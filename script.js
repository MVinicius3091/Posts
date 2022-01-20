const PORT = 3000;
const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const path = require('path');

app.use('/api', apiRouter);
app.use('/', express.static(path.join(__dirname, 'public')));



app.listen(PORT, ()=>{
  console.log('Server running on port:', PORT);
})