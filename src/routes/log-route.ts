import express from "express";
import {fetchAllLogs, fetchLog, postLog, putLog, removeLog} from "../controllers/log-controller";

const router = express.Router()

router.get('/get', fetchAllLogs)
router.get('/get/:id', fetchLog)
router.post('/save', postLog)
router.put('/update/:id', putLog)
router.delete('/delete/:id', removeLog)

export default router