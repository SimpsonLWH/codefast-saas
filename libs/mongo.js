import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGO_URI) {
	throw new Error('Invalid/Missing environment variable: "MONGO_URI"');
}

const uri = process.env.MONGO_URI;
const options = {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
};

// Global variable to cache the MongoDB client promise
let client;
let clientPromise;

// Check for serverless environment and cache connection
if (process.env.NODE_ENV === "development") {
	// Create a global object to hold the MongoDB client promise in development
	if (!global._mongoClientPromise) {
		client = new MongoClient(uri, options);
		global._mongoClientPromise = client.connect().catch((err) => {
			console.error("❌ MongoDB connection error:", err);
			throw err;
		});
	}
	clientPromise = global._mongoClientPromise;
} else {
	// No global caching in production to avoid memory leaks
	client = new MongoClient(uri, options);
	clientPromise = client.connect().catch((err) => {
		console.error("❌ MongoDB connection error:", err);
		throw err;
	});
}

export default clientPromise;