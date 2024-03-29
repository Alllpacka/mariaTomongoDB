import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb://localhost/w3schools", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default async function handler(req, res) {
    if (!client.isConnected()) {
        await client.connect();
    }
    const db = client.db('w3schools');
    return db;
}