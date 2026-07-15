const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Missing environment variable: "MONGODB_URI"');
}

const client = new MongoClient(uri);

const clientPromise = client.connect();

export default clientPromise;