import mongoose from "mongoose"

const connectDB = async () => {

const conn = await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
     useNewUrlparser: true

})
console.log(`MongoDb connected: ${conn.connection.host}`)

}

export default connectDB