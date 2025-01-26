import express from "express";
import {fetchAllVehicles, fetchVehicle, postVehicle, putVehicle, removeVehicle} from "../controllers/vehicle-controller";

const route = express.Router()

route.get('/get', fetchAllVehicles)
route.get('/get/:id', fetchVehicle)
route.post('/save', postVehicle)
route.put('/update/:id', putVehicle)
route.delete('/delete/:id', removeVehicle)

export default route