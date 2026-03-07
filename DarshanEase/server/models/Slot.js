import mongoose from "mongoose"

const slotSchema = new mongoose.Schema({
    templeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Temple"
    },
    time: String,
    availableSeats: Number
})

export default mongoose.model("Slot", slotSchema)