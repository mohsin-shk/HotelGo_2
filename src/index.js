import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express();

// app.get('/',(req,res)=>{
//     res.send("SERVER IS READY!")
// })

app.get("/api/jokes",(req,res)=>{
    const jokes = [
        {
            id:1,
            title:"Joke 1",
            content:"this is joke 1"
        },
        {
            id:2,
            title:"Joke 2",
            content:"this is joke 2"
        },
        {
            id:3,
            title:"Joke 3",
            content:"this is joke 3"
        },
        {
            id:4,
            title:"Joke 4",
            content:"this is joke 4"
        },
        {
            id:5,
            title:"Joke 5",
            content:"this is joke 5"
        }
    ]
    res.send(jokes)
})

const port =  process.env.PORT || 3000 ;

app.listen(port,(req,res)=>{
    console.log(`Server at http://localhost${port}`)
})