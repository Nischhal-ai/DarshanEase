import express from "express"
import { getTemples, createTemple } from "../controllers/templeController.js"

const router = express.Router()

router.get("/", getTemples)
router.post("/", createTemple)

export default router