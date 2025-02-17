import {Request, Response} from "express";
import {extractImg} from "../util/app-util";
import {deleteStaff, getAllStaffs, getStaff, getStaffCount, saveStaff, updateStaff} from "../services/staff-service";
import Staff from "../models/Staff";

const fetchAllStaffs = async (req: Request, res: Response) => {
    try {
        const allStaffs = await getAllStaffs()
        res.status(200).json(allStaffs)
    } catch (e) {
        res.status(404).send('Not found')
        console.log('error in fetch all staffs: ', e)
    }
}

const fetchStaffCount = async (req: Request, res: Response) => {
    try {
        const staffCount = await getStaffCount()
        res.status(200).json(staffCount)
    } catch (e) {
        console.log('error in fetch staff count: ', e)
    }
}

const fetchStaff = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const staff = await getStaff(id)
        res.status(200).json(staff)
    } catch (e) {
        res.status(404).send('Not found')
        console.log('error in fetch staff: ', e)
    }
}

const postStaff = async (req: Request, res: Response) => {
    const staff: Staff = req.body 
    staff.img = extractImg(req)
    staff.phone = Number(staff.phone)
    try {
        const savedStaff = await saveStaff(staff)
        res.status(200).json(savedStaff)
    } catch (e) {
        res.status(500).send('Internal server error!')
        console.log('error in post staff: ', e)
    }
}

const putStaff = async (req: Request, res: Response) => {
    const id = req.params.id
    const staff: Staff = req.body
    staff.img = extractImg(req)
    staff.phone = Number(staff.phone)
    try {
        const updatedStaff = await updateStaff(id, staff)
        res.status(200).json(updatedStaff)
    } catch (e) {
        res.status(500).send('Internal server error!')
        console.log('error in put staff: ', e)
    }
}

const removeStaff = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const deletedStaff = await deleteStaff(id)
        res.status(200).json(deletedStaff)
    } catch (e) {
        res.status(500).send('Internal server error!')
        console.log('error in remove staff: ', e)
    }
}

export { fetchAllStaffs, fetchStaffCount, fetchStaff, postStaff, putStaff, removeStaff }