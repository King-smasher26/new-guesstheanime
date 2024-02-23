const express = require('express')
const mongoose = require('mongoose')
const imginfo = require('./model/imginfoSchema')
const cors= require('cors')
const DB='mongodb+srv://yoab100203:oDvzreSjvyoNWByj@cluster0.6u58haf.mongodb.net/guesstheanimedemo?retryWrites=true&w=majority';
mongoose.connect(DB).then(()=>{
    console.log('connection successfull')
}).catch((e)=>{
    console.log('connection failed')
});
const app = express();
app.use(express.json());
app.use(cors());
async function addanime(){
    try{
        const anime = new imginfo({imgurl:"https://firebasestorage.googleapis.com/v0/b/guesstheanime-5b412.appspot.com/o/images%2Feasy%2F2023-1.png?alt=media&token=cbd57ec4-b2f6-4fd1-8bdf-9e61f90cc3d8",level:1,options:[

            "Attack on Titan ","FUll Metal Alchemist","NARUTO","DBZ"
        ]
        })
        console.log('anime added')
        await anime.save();
        console.log(anime)
    }catch(e){
        console.log(e)
    }
}
app.get('/',async (req,res)=>{
    try{
        const animeimgs=await imginfo.find({})
        return res.status(200).json({
            data:animeimgs
        })
    }catch(e){
        console.log('error occured-')
        res.status(400).send('error')
    }
})
app.post('/gettingData',(req,res)=>{
    res.status(200).send('this is page')
    console.log('send data was hit ')
    console.log(req.body)
})
app.get('/addanime',async (req,res)=>{
    
    try{
        addanime();
        res.status(200).send('working ok')
    }catch(e){
        res.status(400).send('error in page')
    }
})
app.listen(5000,()=>{
    console.log('server is working')
})