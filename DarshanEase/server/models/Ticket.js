import mongoose from "mongoose"

const ticketSchema = new mongoose.Schema({
    bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking"
    },
    ticketNumber: String,
    issuedDate: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Ticket", ticketSchema)