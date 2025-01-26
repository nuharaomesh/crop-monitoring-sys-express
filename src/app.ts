import express from "express";
import cropRoute from "./routes/crop-route";
import fileUpload from 'express-fileupload'

const app = express()
app.use(express.json())
app.use(fileUpload())

app.use('/api/crop', cropRoute)

export default app