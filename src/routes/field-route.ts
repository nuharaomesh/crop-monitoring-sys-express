import express from "express";
import {fetchAllFields, fetchField, postField, putField, removeField} from "../controllers/field-controller";

const router = express.Router()

router.get('/get', fetchAllFields)
router.get('/get/:id', fetchField)
router.post('/save', postField)
router.put('/update/:id', putField)
router.delete('/delete/:id', removeField)

export default router