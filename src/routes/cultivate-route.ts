import express from "express";
import {
    fetchAllCultivations,
    fetchCultivation,
    postCultivation,
    putCultivation, removeCultivation
} from "../controllers/cultivate-controller";

const router = express.Router()

router.get('/get', fetchAllCultivations)
router.get('/get/:id', fetchCultivation)
router.post('/save', postCultivation)
router.put('/update/:id', putCultivation)
router.delete('/delete/:id', removeCultivation)

export default router