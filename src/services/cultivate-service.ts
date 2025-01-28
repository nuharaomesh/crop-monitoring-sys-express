import prisma from "../db/prisma-data-store";
import {generateID} from "../util/app-util";
import Cultivate from "../models/Cultivate";

const getAllCultivations = async () => {
    try {
        return prisma.cultivate.findMany()
    } catch (e) {
        throw new Error('error in get all cultivations: ' + e)
    }
}

const getCultivation = async (cultivateID: string) => {
    try {
        return prisma.cultivate.findUnique({
            where: {cultivateID: cultivateID}
        })
    } catch (e) {
        throw new Error('error in get crop: ' + e)
    }
}

const saveCultivation = async (cultivate: Cultivate) => {
    cultivate.cultivateID = generateID('CULTIVATE')
    try {
        return prisma.cultivate.create({
            data: cultivate
        })
    } catch (e) {
        throw new Error('error in save cultivate: ' + e)
    }
}

const updateCultivation = async (cultivateID: string, cultivate: Cultivate) => {
    try {
        return prisma.cultivate.update({
            where: {cultivateID: cultivateID},
            data: cultivate
        })
    } catch (e) {
        throw new Error('error in update cultivate: ' + e)
    }
}

const deleteCultivation = async (cultivateID: string) => {
    try {
        return prisma.cultivate.delete({
            where: {cultivateID: cultivateID}
        })
    } catch (e) {
        throw new Error('error in delete cultivate: ' + e)
    }
}

export { getAllCultivations, getCultivation, saveCultivation, updateCultivation, deleteCultivation }