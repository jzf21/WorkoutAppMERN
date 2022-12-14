require('dotenv').config()
const mongoose=require('mongoose')
const express =require('express')
const workoutRoutes=require('./routes/workouts')

//express app
const app =express()

//routes
app.get('/',(req,res) =>{
    res.json({mssg:'welcome to the app'})
})
//middleware
app.use(express.json())

app.use((req,res, next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('connected to db')
        
    })


//listen for requests
app.listen(process.env.PORT,() =>{
    console.log("listening on port",process.env.PORT)

})