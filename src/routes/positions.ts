import express from 'express'
import positions from '../controllers/positions'

const root = express.Router()

root.post('/create-position', positions.createPosition)
root.post('/close-position', positions.closePosition)

export default root