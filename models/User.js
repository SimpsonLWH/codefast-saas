import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	creatorId: { 
		type: Number, 
		unique: true 
	},
	username: { 
		type: String, 
		unique: true, 
		required: true, 
		index: true 
	},
	forename: { 
		type: String, 
		required: true,
		trim: true 
	},
	surname: { 
		type: String, 
		required: true,
		trim: true
	},
	email: { 
		type: String, 
		required: true, 
		unique: true, 
		trim: true, 
		lowercase: true 
	},
	password: { 
		type: String, 
		required: true 
	}, 
	emailVerified: { 
		type: Boolean, 
		default: false 
	}, 
	friends: [{ 
		type: mongoose.Schema.Types.ObjectId, 
		ref: "User" 
	}],
	eventsCreated: [{ 
		type: mongoose.Schema.Types.ObjectId, 
		ref: "Event" 
	}],
	eventsAttended: [{ 
		type: mongoose.Schema.Types.ObjectId, 
		ref: "Event" 
	}],
	planPrivacy: { 
		type: String, 
		enum: ["friends-only", "private"], 
		default: "friends-only" 
	},
});

export default mongoose.models.User || mongoose.model("User", userSchema);