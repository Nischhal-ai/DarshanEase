import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    templeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Temple"
    },
    slotId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Slot"
    },
    seats: Number,
    bookingDate: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Booking", bookingSchema)