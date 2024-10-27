const eventSchema = new mongoose.Schema({
	eventId: { 
		type: Number, 
		unique: true 
	},
	creatorId: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: "User", 
		required: true 
	},
	participants: [{ 
		type: mongoose.Schema.Types.ObjectId, 
		ref: "User" 
	}],
	title: { 
		type: String, 
		required: true, 
		trim: true, 
		maxlength: 100 
	},
	type: { 
		type: String, 
		required: true, 
		enum: ["🍿 movie", "🍴 dinner", "⚽️ sport", "🎸 concert", "🎭 theatre", "🚶 walk", "🎮 video-game", "📚 study", "🏛️ museum", "📝 other"]
	},
	duration: { 
		type: Number, 
		required: true 
	},
	rating: [{ 
		type: mongoose.Schema.Types.ObjectId, 
		ref: "Rating" 
	}],
	privacy: { 
		type: String, 
		enum: ["friends-only", "private"], 
		default: "friends-only" 
	},
	timestamp: { 
		type: Date, 
		default: Date.now 
	},
});

export default mongoose.models.Event || mongoose.model("Event", eventSchema);