const mongoose=require('mongoose');

const connection =()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/Chatapplication").then(()=>{
        console.log("connections is succefully done");
    })
}
module.exports={connection};
