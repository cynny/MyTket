import mongoose from 'mongoose';

const eventSchema=mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users', 
        required:true
    },
    name: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    Time: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true
    }
},{
    timestamps: true
});

const Events = mongoose.model('Events',eventSchema)
export default Events