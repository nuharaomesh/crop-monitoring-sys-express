import {Request, Response} from "express";
import {extractImg} from "../util/app-util";
import {deleteLog, getAllLogs, getLog, saveLog, updateLog} from "../services/log-service";
import Logs from "../models/Logs";

const fetchAllLogs = async (req: Request, res: Response) => {
    try {
        const allLogs = await getAllLogs()
        res.status(200).json(allLogs)
    } catch (e) {
        res.status(404).send('Not found')
        console.log('error in fetch all logs: ', e)
    }
}

const fetchLog = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const log = await getLog(id)
        res.status(200).json(log)
    } catch (e) {
        res.status(404).send('Not found')
        console.log('error in fetch log: ', e)
    }
}

const postLog = async (req: Request, res: Response) => {
    const log: Logs = req.body
    log.img = extractImg(req)
    try {
        const savedLog = await saveLog(log)
        res.status(200).json(savedLog)
    } catch (e) {
        res.status(500).send('Internal server error!')
        console.log('error in post log: ', e)
    }
}

const putLog = async (req: Request, res: Response) => {
    const id = req.params.id
    const log: Logs = req.body
    log.img = extractImg(req)
    try {
        const updatedLog = await updateLog(id, log)
        res.status(200).json(updatedLog)
    } catch (e) {
        res.status(500).send('Internal server error!')
        console.log('error in put log: ', e)
    }
}

const removeLog = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const deletedLog = await deleteLog(id)
        res.status(200).json(deletedLog)
    } catch (e) {
        res.status(500).send('Internal server error!')
        console.log('error in remove log: ', e)
    }
}

export { fetchAllLogs, fetchLog, postLog, putLog, removeLog }