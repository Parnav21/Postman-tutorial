import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json());

app.get('/api',(req,res)=>{
res.send('Good Morning')
})

app.post('/login',(req,res)=>{
   const{username,dateofbirth,email,password} = req.body;
   console.log(username,dateofbirth,email,password)
   res.json({success:true,message:'Successfully login'})
})

app.listen(3035,()=>console.log('Server connected'))