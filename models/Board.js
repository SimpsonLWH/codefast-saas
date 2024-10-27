import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
	creatorId: { 
		type: mongoose.Schema.Types.ObjectId, 
		required: true, 
		ref: "User" 
	},
	participants: [{ 
		type: mongoose.Schema.Types.ObjectId, 
		ref: "User" 
	}], // Friends or collaborators with access
	name: { 
		type: String, 
		required: true, 
		trim: true 
	},
	description: { 
		type: String, 
		trim: true 
	}, // Optional description for the board
	privacy: { 
		type: String, 
		enum: ["friends-only", "private"], 
		default: "friends-only" 
	}, // Controls visibility
	timestamp: { 
		type: Date, 
		default: Date.now 
	}, // Creation date for tracking
});

export default mongoose.models.Board || mongoose.model("Board", boardSchema);