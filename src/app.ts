import express from "express";
import cropRoute from "./routes/crop-route";
import fileUpload from 'express-fileupload'
import vehicleRoute from "./routes/vehicle-route";

const app = express()
app.use(express.json())
app.use(fileUpload())

app.use('/api/crop', cropRoute)
app.use('/api/vehicle', vehicleRoute)

export default app