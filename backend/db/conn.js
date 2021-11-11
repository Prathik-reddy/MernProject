const mongoose = require('mongoose');
const DB = process.env.DATABASE;
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
})
.then(()=> {console.log("Connected to Mongo successfully");})
.catch((error)=> {console.log("Error Occured "+error)});
