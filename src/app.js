import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let app = express()
let publicPath = path.join(__dirname, 'public')

app.use(express.static(publicPath))
//http get method  
app.get('/',(req,res)=>{
    //sending files from public to client-side front
    res.sendFile(path.join(publicPath, 'index.html'))
})
 
  
 


app.listen(3000,()=>{
    console.log('conected')
})