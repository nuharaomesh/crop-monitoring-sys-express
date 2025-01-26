import {Request, Response} from "express";
import {deleteVehicle, getAllVehicles, getVehicle, saveVehicle, updateVehicle} from "../services/vehicle-service";

const fetchAllVehicles = async (req: Request, res: Response) => {
    try {
        const allVehicles = await getAllVehicles()
        res.status(200).json(allVehicles)
    } catch (e) {
        res.status(404).send('Not found!')
        console.log('error in fetch all vehicles: ', e)
    }
}

const fetchVehicle = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const vehicle = await getVehicle(id)
        res.status(200).json(vehicle)
    } catch (e) {
        res.status(404).send('Not found!')
        console.log('error in fetch vehicle: ', e)
    }
}

const postVehicle = async (req: Request, res: Response) => {
    const data = req.body
    try {
        const savedVehicle = await saveVehicle(data)
        res.status(200).json(savedVehicle)
    } catch (e) {
        res.status(500).send('Internal server error')
        console.log('error in post vehicle: ', e)
    }
}

const putVehicle = async (req: Request, res: Response) => {
    const id = req.params.id
    const data = req.body
    try {
        const updatedVehicle = await updateVehicle(id, data)
        res.status(200).json(updatedVehicle)
    } catch (e) {
        res.status(500).send('Internal server error')
        console.log('error in put vehicle: ', e)
    }
}

const removeVehicle = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const deletedVehicle = await deleteVehicle(id)
        res.status(200).json(deletedVehicle)
    } catch (e) {
        res.status(500).send('Internal server error')
        console.log('error in remove vehicle: ', e)
    }
}

export { fetchAllVehicles, fetchVehicle, postVehicle, putVehicle, removeVehicle }