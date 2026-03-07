import Ticket from "../models/Ticket.js"

export const generateTicket = async (req, res) => {

    const ticket = new Ticket({
        bookingId: req.body.bookingId,
        ticketNumber: "TKT" + Math.floor(Math.random() * 1000000)
    })

    await ticket.save()

    res.json(ticket)
}