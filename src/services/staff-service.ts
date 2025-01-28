import prisma from "../db/prisma-data-store";
import {generateID} from "../util/app-util";
import Staff from "../models/Staff";

const getAllStaffs = async () => {
    try {
        return prisma.staff.findMany()
    } catch (e) {
        throw new Error('error in get all staffs: ' + e)
    }
}

const getStaff = async (staffID: string) => {
    try {
        return prisma.staff.findUnique({
            where: {staffID: staffID}
        })
    } catch (e) {
        throw new Error('error in get staff: ' + e)
    }
}

const saveStaff = async (staff: Staff) => {
    staff.staffID = generateID('STAFF')
    try {
        return prisma.staff.create({
            data: staff
        })
    } catch (e) {
        throw new Error('error in save crop: ' + e)
    }
}

const updateStaff = async (staffID: string, staff: Staff) => {
    try {
        return prisma.staff.update({
            where: {staffID: staffID},
            data: staff
        })
    } catch (e) {
        throw new Error('error in update staff: ' + e)
    }
}

const deleteStaff = async (staffID: string) => {
    try {
        return prisma.staff.delete({
            where: {staffID: staffID}
        })
    } catch (e) {
        throw new Error('error in delete staff: ' + e)
    }
}

export { getAllStaffs, getStaff, saveStaff, updateStaff, deleteStaff }