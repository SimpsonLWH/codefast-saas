const ratingSchema = new mongoose.Schema({
	creatorId: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: "User", 
		required: true 
	},
	eventId: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: "Event", 
		required: true 
	},
	rating: { 
		type: Number, 
		min: 1, 
		max: 5, 
		required: true 
	},
	timestamp: { 
		type: Date, 
		default: Date.now 
	},
});

export default mongoose.models.Rating || mongoose.model("Rating", ratingSchema);