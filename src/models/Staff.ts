import {Availability, Gender} from "@prisma/client";

export default class Staff {
    staffID!: string
    name!: string
    gender!: Gender
    email!: string
    role!: string
    address!: string
    joinedDate!: string
    dob!: string
    designation!: string
    phone!: number
    status!: Availability
    img!: string 
}