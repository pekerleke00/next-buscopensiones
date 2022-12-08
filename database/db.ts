import mongoose from "mongoose";

const mongoConnection = {
    isConnected: 0
}

export const connect = async() => {
    if (mongoConnection.isConnected) {
        console.info('- Open conncection');
        return;
    }

    if (mongoose.connections.length > 0) {
        mongoConnection.isConnected = mongoose.connections[0].readyState;

        if (mongoConnection.isConnected === 1) {
            console.info('- Using existing connection');
            return;
        }

        await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_URL || '');

    mongoConnection.isConnected = 1;
}

export const disconnect = async() => {

    if (mongoConnection.isConnected === 0) return;

    await mongoose.disconnect();
    mongoConnection.isConnected = 0;
    console.info('- Close connection')
}