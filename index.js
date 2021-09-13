const express = require('express');

const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');


const app = express();
const PORT = 80;
app.use(bodyParser.json({limit: '5mb'}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers',
    'Content-Type, Authorization');
    next();
});

app.use('/',userRoutes); 
// app.use('/login',userRoutes); 
// app.use('/user',userRoutes); 

app.listen(PORT,()=> console.log(`listening on port ${PORT}`));
