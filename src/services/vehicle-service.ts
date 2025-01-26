import Vehicle from "../models/Vehicle";
import prisma from "../db/prisma-data-store";
import {generateID} from "../util/app-util";

const getAllVehicles = async () => {
    try {
        return prisma.vehicle.findMany()
    } catch (e) {
        throw new Error('error in get all vehicles: ' + e)
    }
}

const getVehicle = async (id: string) => {
    try {
        return prisma.vehicle.findUnique({ where: {vehicleID: id}})
    } catch (e) {
        throw new Error('error in get vehicle: ' + e)
    }
}

const saveVehicle = async (vehicle: Vehicle) => {
    vehicle.vehicleID = generateID('VEHICLE')
    try {
        return prisma.vehicle.create({
            data: vehicle
        })
    } catch (e) {
        throw new Error('error in save vehicle: ' + e)
    }
}

const updateVehicle = async (id: string, vehicle: Vehicle) => {
    try {
        return prisma.vehicle.update({
            where: {vehicleID: id},
            data: vehicle
        })
    } catch (e) {
        throw new Error('error in update vehicle: ' + e)
    }
}
const deleteVehicle = async (id: string) => {
    try {
        return prisma.vehicle.delete({where: {vehicleID: id}})
    } catch (e) {
        throw new Error('error in delete vehicle: ' + e)
    }
}

export { getAllVehicles, getVehicle, saveVehicle, updateVehicle, deleteVehicle }