import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import bodyParser from 'body-parser'
    //for directory to public folder
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let app = express()
let publicPath = path.join(__dirname, 'public')

app.use(bodyParser.json())
app.use(express.static(publicPath))
    //http get method  
app.get('/',(req,res,next)=>{
    //sending files from public to client-side front
    res.sendFile(path.join(publicPath, 'index.html'))
})
app.post('/submit', (req, res) => {
    const formData = req.body;
    //read the existing data from 'db.json'
    const existingData = fs.readFileSync('src/public/db.json')
    const data = JSON.parse(existingData)
    //add the new form data to the existing data
    data.push(formData)
    //write the updated data back to 'db.json'
    fs.writeFileSync('src/public/db.json', JSON.stringify(data, null, 2))
    res.json({message: 'Data successfully added to db.json'})
});
  
 


app.listen(3000,()=>{
    console.log('conected')
})