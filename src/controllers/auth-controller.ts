import dotenv from "dotenv"
import { NextFunction, Request, Response } from "express"
import { saveUser, verifyUser } from "../services/auth-service"
import jwt, { Secret } from 'jsonwebtoken'
import User from "../models/User"

dotenv.config()

const loginUser = async (req: Request, res: Response) => {
    const username = req.body.username
    const password = req.body.password

    const user: User = { username, password }
    try {
        const isVerified = await verifyUser(user)
        
        if (isVerified) {
            const token = jwt.sign({ username }, process.env.SECRET_KEY as Secret, {expiresIn: '2m'})
            const refresh_token = jwt.sign({ username }, process.env.REFRESH_TOKEN as Secret, { expiresIn: "7d" })

            res.cookie("refreshToken", refresh_token, {
                httpOnly: true,
                secure: true,
                sameSite: "strict"
            })

            res.json({ accessToken: token })           
        } else {
            res.status(403).json("Invalid credentials")
        }
    } catch (e) {
        res.status(400).send(e)
    }
}

const registerUser = async (req: Request, res: Response) => {
    const username = req.body.username
    const password = req.body.password
    
    console.log(username, password);
    
    const user: User = { username, password }

    try {
        const registration = await saveUser(user)
        res.status(201).json(registration)
    } catch (e) {
        res.status(500).json(e)
    }
}

const refreshToken = async (req: Request, res: Response) => {
    try {
        const refresh_token = req.cookies.refreshToken
        if (!refresh_token) {
            res.status(403).json({ message: "Refresh token invalid" });
        }
        
        jwt.verify(refresh_token as string, process.env.REFRESH_TOKEN as Secret, (err, decoded) => {
            if (err) return res.status(403).json({ message: "Token expired" });

            const user = decoded as { username: string };

            const newAccessToken = jwt.sign(
                { username: user.username },
                process.env.SECRET_KEY as Secret,
                { expiresIn: "15m" }
            );

            res.json({ accessToken: newAccessToken });
        })
    } catch (e) {
        res.status(500).json({ message: e});
    }
}

const logOut = async (req: Request, res: Response) => {
    res.clearCookie("refreshToken")
    res.json({ message: "Logged out" })
}

function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization
    const token = authHeader?.split(' ')[1]

    if (!token) res.status(401).send("No token provided")
    
    try {
        const payload = jwt.verify(token as string, process.env.SECRET_KEY as Secret) as { username: string, iat: number}
        req.body.username = payload.username
        next()
    } catch (e) {
        res.status(401).send(e)
    }
}

export { loginUser, registerUser, refreshToken, authenticateToken, logOut}