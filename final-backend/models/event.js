import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Event title required'],
    },
    price: {
        type: Number,
        required: [true, 'Event price required'],
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
    },
    startTime: {
        type: Date,
        default: Date.now(),//yyyy-mm-dd
    },
    endTime: {
        type: Date,
        default: new Date(+new Date() + 30 * 24 * 60 * 60 * 1000)
    },
    description: String,
    eventImage: String,
    address: {
        country: {
            type: String,
            required: [true, 'Country required'],
        },
        city: {
            type: String,
            required: [true, 'City required'],
        },
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"categories",
        required:true,
    },
    website: String,
    comments: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "eventcomments",
    }]
}, { timestamps: true, })


const EventModel = mongoose.model('events', EventSchema);
export default EventModel;
