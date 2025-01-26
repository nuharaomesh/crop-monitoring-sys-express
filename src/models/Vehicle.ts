import {Availability, FuelType} from "@prisma/client";

export default class Vehicle {
    vehicleID!: string
    licencePlate!: string
    category!: string
    fuelType!: FuelType
    remarks!: string
    status!: Availability
}