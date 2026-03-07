import Slot from "../models/Slot.js"

export const getSlots = async (req, res) => {
    const slots = await Slot.find().populate("templeId")
    res.json(slots)
}

export const createSlot = async (req, res) => {
    const slot = new Slot(req.body)
    await slot.save()
    res.json(slot)
}