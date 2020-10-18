const  express = require('express')
const app = express()


app.get('/', (req,res)=>{
    res.send('hello word')
})
app.get('/arrow', (req, res)=>{
    res.send('This is an arrow function')
})
app.get('/admin/articleDahboard',function(req,res){
    res.send('this is my dashboard')
})
app.listen(3000,function(){
    console.log('am a stackup expert')
})