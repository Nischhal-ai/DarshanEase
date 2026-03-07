import dns from "dns"
dns.setServers(['8.8.8.8', '1.1.1.1'])

import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import authRoutes from "./routes/authRoutes.js"
import templeRoutes from "./routes/templeRoutes.js"
import slotRoutes from "./routes/slotRoutes.js"
import bookingRoutes from "./routes/bookingRoutes.js"
import ticketRoutes from "./routes/ticketRoutes.js"

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/temples", templeRoutes)
app.use("/api/slots", slotRoutes)
app.use("/api/bookings", bookingRoutes)
app.use("/api/tickets", ticketRoutes)

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err))

// Server
const PORT = process.env.PORT || 6000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})