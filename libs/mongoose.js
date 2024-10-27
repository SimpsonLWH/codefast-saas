import mongoose from "mongoose";
import User from "@/models/User";
import Board from "@/models/Board";

// Connection cache for serverless environments
let isConnected = null;

const connectMongo = async () => {
	if (isConnected) {
		console.log("✅ Using existing MongoDB connection");
		return;
	}
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,         // Ensures indexes are created
			useFindAndModify: false,       // Uses native findOneAndUpdate()
		});

		isConnected = connection.connections[0].readyState; // Set connection state to cache
		console.log("✅ MongoDB connected successfully");
	} catch (e) {
		console.error("❌ Mongoose Error: " + e.message);
	}
};

export default connectMongo;