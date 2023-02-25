const mongoose=require('mongoose')
const Schema =mongoose.Schema;

const postSchema=new Schema(
    {
        title:{type:String,require:false},
        photo:{type:String,require:false},
        ph:{type:String,require:false},

    },
    {
        timestamps:true
    }
)
module.exports =mongoose.model('posts',postSchema);