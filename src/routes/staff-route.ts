import express from "express";
import {
    fetchAllStaffs,
    fetchStaff,
    fetchStaffCount,
    postStaff,
    putStaff,
    removeStaff
} from "../controllers/staff-controller";

const router = express.Router()

router.get('/get', fetchAllStaffs)
router.get('/get_count', fetchStaffCount)
router.get('/get/:id', fetchStaff)
router.post('/save', postStaff)
router.put('/update/:id', putStaff)
router.delete('/delete/:id', removeStaff)

export default router