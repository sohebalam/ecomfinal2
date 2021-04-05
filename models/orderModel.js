import mongoose from 'mongoose'
import { truncate } from 'fs';
const {ObjectId} = mongoose.Schema.Types

const orderSchema  = new mongoose.Schema({
    user:{
        type:ObjectId,
        ref:"User"
    },
    products:[
        {
            quantity:{type:Number,default:1},
            product:{type:ObjectId,ref:"Product"}
       }
    ],
    email:{
        type:String,
        required:true
    },
    total:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

mongoose.models = {}
export default  mongoose.model("Order",orderSchema)