import mongoose from 'mongoose';
require('dotenv').config();
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const url = `mongodb+srv://${username}:${password}@cluster0.galkj9e.mongodb.net/Todos_DB?retryWrites=true&w=majority`;

export default async function connectToMongoDbDatabase() {
  try {
    await mongoose.connect(url);
    console.log('Connection established successfully.');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
