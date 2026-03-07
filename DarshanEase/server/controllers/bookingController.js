import Booking from "../models/Booking.js"

export const createBooking = async (req, res) => {
    const booking = new Booking(req.body)
    await booking.save()
    res.json(booking)
}

export const getBookings = async (req, res) => {
    const bookings = await Booking.find()
        .populate("templeId")
        .populate("slotId")

    res.json(bookings)
}