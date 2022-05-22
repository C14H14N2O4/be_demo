const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://be_demo_user:AXLHUGD9dh4ABm5R@cluster0.kca6z.mongodb.net/?retryWrites=true&w=majority")

        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB