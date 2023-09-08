const express = require("express");
const app = express();

app.get('/', (req, res)=>{
res.send('Ugali Kitimoto');
});


app.get('/api/recipes', (req, res) =>{
    res.send(
        [1, 2, 3]
    );
});

//Fetch specific id in the endpoint

app.get('/api/recipes/:id', (req, res) =>{
    res.send(req.params.id)
})
//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Kitimoto is Ready on Port ${port}`));