require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const router = require('./routers/movieRouter');
app.use(express.json());
app.use('/api/v1/movie', router);

app.all('*',(req,res)=>{
    res.send(`<h2>This is a server to run APIs only, tada!!! no UI found..</h2>`)
})

app.listen(port,()=> console.log(`app is listening at port ${port}`));
