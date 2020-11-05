const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;

let ToDos = [];

app.use(bodyParser.urlencoded({extended: false}));

app.set('views','views');
app.set('view engine','ejs');

app.get('/',(req, res)=>{
    res.render('index',{title:"TODO",todos: ToDos});
});

app.post('/add', (req, res)=>{
    ToDos.push(req.body);
    res.redirect('/');
})

app.post('/remove/:id',(req ,res)=>{
    let todoId = req.params.id;
    ToDos.splice(todoId, 1);
    res.redirect('/');
});

app.put('/update/:id',(req, res)=>{
    let todoId = req.params.id;
    ToDos[todoId].title = req.body.title;
    ToDos[todoId].discription = req.body.discription;
});


app.listen(PORT,()=>console.info(`Server is listening on ${PORT}`));