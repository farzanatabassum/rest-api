//import express

const express=require('express');
const app=express();
const courses=[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},
]
//Middlewares
app.get('/api/courses',(req,res)=>{
    res.send(courses)
})
app.use('/posts',()=>{
    console.log('This is a middleware running')
})
app.get('/api/courses/:id',(req,res)=>{
 const course=courses.find(c=>c.id===parseInt(req.params.id))
 if(!course) res.status(404).send("This course ID was not found")
 res.send(course)
})
//Routes
app.get('/',(req,res)=>{
    res.send('We are on home');
});
app.get('/posts',(req,res)=>{
    res.send('We are on posts');
});
// app.get('/api/courses',(req,res)=>{
//     res.send([1,2,3])
// })
// app.get('/api/courses/:id',(req,res)=>{
//     res.send(req.params.id)
// })
// app.get('/api/courses/:year/:month',(req,res)=>{
//     res.send(req.params)
// })
app.get('/api/courses/:year/:month',(req,res)=>{
    res.send(req.query)
})

//Port
const port=process.env.PORT||3000;
//how do we start listening to the server
// app.listen(3000,()=>console.log('Listening on port 3000..'));
app.listen(port,()=>console.log(`Listening on port ${port}..`));