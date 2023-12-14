const mongoose = require('mongoose');
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const url = `mongodb+srv://${username}:${password}@cluster0.galkj9e.mongodb.net/?retryWrites=true&w=majority`;

export default async function connectToMongoDbDatabase() {
  try {
    await mongoose.connect(url);
  } catch (err) {
    process.exit(1);
  }
}
