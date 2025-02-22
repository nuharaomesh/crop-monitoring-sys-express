import express from "express";
import cropRoute from "./routes/crop-route";
import fileUpload from 'express-fileupload'
import vehicleRoute from "./routes/vehicle-route";
import fieldRoute from "./routes/field-route";
import staffRoute from "./routes/staff-route";
import logRoute from "./routes/log-route";
import cultivateRoute from "./routes/cultivate-route";
import { Request, Response } from "express";
import authRoutes from './routes/auth-router'
import { authenticateToken } from "./controllers/auth-controller";
import cookieParser from "cookie-parser";
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(fileUpload())
app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
}));

app.use('/api/auth', authRoutes)

app.use(authenticateToken)

app.use('/api/crop', cropRoute)
app.use('/api/field', fieldRoute)
app.use('/api/staff', staffRoute)
app.use('/api/log', logRoute) 
app.use('/api/vehicle', vehicleRoute)
app.use('/api/cultivation', cultivateRoute)

export default app