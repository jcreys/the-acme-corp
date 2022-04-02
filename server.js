
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/the_acme_corp');

app.use('assets', express.static(path.join(__dirname, 'src'))); //set up static route

app.listen(port, ()=> console.log(`listening on port ${port}`));

const init = async() => {
    try{
        console.log('calling init');
        await sequelize.sync({force: true});
    }
    catch(ex){
        console.log(ex);
    }
}

init();