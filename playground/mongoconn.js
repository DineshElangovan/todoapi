const MongoClient= require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/sambug',(err,db)=>{
    if(err){
        return console.log("unable to connect to db"+err)
    }
        console.log('connected to db')

    // db.collection('Todos').insertOne({name:'abi',task:'ui creation', status:'inprogress'},(err,result)=>{
    //     if(err){
    //         return console.log('error in insertion',err)
    //     }
    //         console.log(JSON.stringify(result.ops,undefined,2))
    // });  

    db.collection('Todos').find({status:'inprogress'}).count().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2))
    },(err)=>{
        console.log('erroe in fetching')
    })  
    db.close()
})