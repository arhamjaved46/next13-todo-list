import mongoose from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONODB_URI);
        console.log('Mongoose Connect');
    } catch (error) {
        console.log(error);
    }
}

export default connection;