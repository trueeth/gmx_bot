
import { Request, Response } from 'express';

const createPosition = async (req: Request, res: Response) => {
    const reqBody = JSON.parse(req.body)
    console.log(reqBody.text)



    return res.status(200).json({ message: "Position created successfully" })

}

const closePosition = async (req: Request, res: Response) => {
    const { } = req.body
}

export default { createPosition, closePosition }