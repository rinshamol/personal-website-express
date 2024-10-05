var express=require('express');
var app=express();
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./views');
app.get('/',function(req,res){
    res.render('home');
});
app.get('/result',function(req,res){
    res.render('result');
});
app.post('/',function(req,res){
    res.render('result',{
        name:req.body.name,
        email:req.body.email,
        message:req.body.msg
    });
})
app.listen(3000);