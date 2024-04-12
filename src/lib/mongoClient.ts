import { MongoClient } from 'mongodb';
const uri = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017';
export const client = new MongoClient(uri)
