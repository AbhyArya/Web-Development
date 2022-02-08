const mongoose = require('mongoose')
const connectDB = async ()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI
        //     ,{
        //     useNewUriParser:true,
        //     useUnifiedTopology:true,
        //     useFindAndModify:false,
        //     useCreateIndex:true
        // }
        )
        console.log(`bd connected ${con.connection.host}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
} 
 
module.exports= connectDB