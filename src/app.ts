import express from "express";
import cropRoute from "./routes/crop-route";
import fileUpload from 'express-fileupload'
import vehicleRoute from "./routes/vehicle-route";
import fieldRoute from "./routes/field-route";
import staffRoute from "./routes/staff-route";
import logRoute from "./routes/log-route";
import cultivateRoute from "./routes/cultivate-route";
import { Request, Response } from "express";

const app = express()
app.use(express.json())
app.use(fileUpload())

app.use(function(req: Request, res: Response, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept, Authorization');
    next();
});

app.use('/api/crop', cropRoute)
app.use('/api/field', fieldRoute) 
app.use('/api/staff', staffRoute)
app.use('/api/log', logRoute) 
app.use('/api/vehicle', vehicleRoute)
app.use('/api/cultivation', cultivateRoute)

export default app