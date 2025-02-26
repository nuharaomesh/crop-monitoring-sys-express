import express from "express";
import {fetchAllCrops, fetchCrop, fetchCropCount, postCrop, putCrop, removeCrop} from "../controllers/crop-controller";

const router = express.Router()

router.get('/get', fetchAllCrops)
router.get('/get_count', fetchCropCount)
router.get('/get/:id', fetchCrop)
router.post('/save', postCrop)
router.put('/update/:id', putCrop)
router.delete('/delete/:id', removeCrop)

export default router