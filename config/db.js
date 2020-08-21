const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config/config.env'})

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(encodeURI(process.env.MONGO_URI), {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
    } catch (err) {
        console.log(`Error: ${err.message}`.red)
        process.exit(1);
    }
}

module.exports = connectDB();