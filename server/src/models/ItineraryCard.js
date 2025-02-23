const moongose = require('mongoose');

const ItineraryCardSchema = new moongose.Schema({
    _userId: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'User'
    },
    _itineraryId: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'Itinerary'
    },
    title: {
        type: String,
        required: [true, 'Please provide a title']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description']
    },
    image: {
        type: String,
        required: [true, 'Please provide an image']
    }
}, { timestamps: true });

module.exports = moongose.model('ItineraryCard', ItineraryCardSchema);