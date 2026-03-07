import mongoose from "mongoose"

const templeSchema = new mongoose.Schema({
    name: String,
    location: String,
    description: String,
    image: String
})

export default mongoose.model("Temple", templeSchema)