const { MongoClient } = require("mongodb");

const uri = process.env.USER_STATS_MONGODB_URI;

if (!uri) {
  throw new Error('Missing environment variable: "USER_STATS_MONGODB_URI"');
}

const client = new MongoClient(uri);

const clientPromise = client.connect();

export default clientPromise;