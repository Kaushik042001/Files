var express=require('express')
var bp=require('body-parser')
var cors=require('cors')
var mong=require('mongodb').MongoClient
var app=express()
app.use(cors())
app.use(bp.json())
var url="mongodb://127.0.0.1:27017"

app.post("/insert",function(req,res){
    mong.connect(url,(err,db)=>{
        if(err) throw err
        var dbo=db.db('Practical2024')
        var d={dtitle:req.body.dtitle, ddesc:req.body.ddesc, dstream:req.body.dstream}
        dbo.collection("degree").insertOne(d,(err,res)=>{
            if(err) throw err
            console.log('rec inserted')
            db.close()
        })
    })
})
app.get("/display",function(req,res){
    mong.connect(url,(err,db)=>{
        if(err) throw err
        var dbo=db.db('Practical2024')
        dbo.collection("degree").find({}).toArray((err,recs)=>{
            if(err) throw err
            res.send(recs)
        }
    )
})
})
app.listen(5000,()=>console.log("listening.."))

