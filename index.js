const express = require("express");
const app = express();


const recipes = [
    {id: 1, name: 'pork loin'},
    {id: 2, name: 'chili garlic sauce'},
    {id: 3, name: 'olive oil'},
    {id: 4, name: 'green onions'}
]

app.get('/', (req, res)=>{
res.send('Ugali Kitimoto');
});


app.get('/api/recipes', (req, res) =>{
    res.send(recipes);
});

//Fetch specific id in the endpoint

app.get('/api/recipes/:id', (req, res) =>{
    const recipe = recipes.find(r => r.id === parseInt(req.params.id))

    if(!recipe) res.status(404).send("Recipe Ingredient is Not Found!!")
    res.send(recipe)
})
//Query string parameter
app.get('/api/posts/:year/:month',(req, res) =>{
    res.send(req.query)
})
//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Kitimoto is Ready on Port ${port}`));