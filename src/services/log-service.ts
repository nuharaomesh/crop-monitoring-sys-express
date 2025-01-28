import prisma from "../db/prisma-data-store";
import {generateID} from "../util/app-util";
import Logs from "../models/Logs";

const getAllLogs = async () => {
    try {
        return prisma.log.findMany()
    } catch (e) {
        throw new Error('error in get all logs: ' + e)
    }
}

const getLog = async (logCode: string) => {
    try {
        return prisma.log.findUnique({
            where: {logCode: logCode}
        })
    } catch (e) {
        throw new Error('error in get log: ' + e)
    }
}

const saveLog = async (log: Logs) => {
    log.logCode = generateID('LOG')
    try {
        return prisma.log.create({
            data: log
        })
    } catch (e) {
        throw new Error('error in save log: ' + e)
    }
}

const updateLog = async (logCode: string, log: Logs) => {
    try {
        return prisma.log.update({
            where: {logCode: logCode},
            data: log
        })
    } catch (e) {
        throw new Error('error in update log: ' + e)
    }
}

const deleteLog = async (logCode: string) => {
    try {
        return prisma.log.delete({
            where: {logCode: logCode}
        })
    } catch (e) {
        throw new Error('error in delete log: ' + e)
    }
}

export { getAllLogs, getLog, saveLog, updateLog, deleteLog }