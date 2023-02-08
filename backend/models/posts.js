const mongoose=require('mongoose')
const Schema =mongoose.Schema;

const postSchema=new Schema(
    {
        title:{type:String,require:true},
        photo:{type:String,require:true},
        pharaghrap:{type:String,require:true},

    },
    {
        timestamps:true
    }
)
module.exports =mongoose.model('posts',postSchema);