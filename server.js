const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use('assets', express.static(path.join(__dirname, 'src'))); //set up static route

app.listen(port, ()=> console.log(`listening on port ${port}`));