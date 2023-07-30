const mongoose = require('mongoose');
const mongourl = 'mongodb+srv://jatinchattani25:atlas1st@cluster0.2qbv3fm.mongodb.net/gofoodmern?retryWrites=true&w=majority'

const mongoDB =async() =>{
    try{
    await mongoose.connect(mongourl,{ useNewUrlParser:true});
    console.log("connected");
    const fetched_data= await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(function( err,data){
        if(err) console.log(err);
        else console.log();
    }) ;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = mongoDB;