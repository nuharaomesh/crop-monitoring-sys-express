import prisma from "../db/prisma-data-store";
import {Crop} from "../models/Crop";
import { generateID } from "../util/app-util";

const getAllCrops = async () => {
    try {
        return prisma.crop.findMany()
    } catch (e) {
        throw new Error('error in get all crops: ' + e)
    }
}

const getCropCount = async () => {
    try {
        return prisma.crop.groupBy({
            by: ['category'],
            _count: {
                category: true
            }
        })
    } catch (e) {
        throw new Error('error in get crop count: ' + e)
    }
}

const getCrop = async (cropCode: string) => {
    try {
        return prisma.crop.findUnique({
            where: {cropCode: cropCode}
        })
    } catch (e) {
        throw new Error('error in get crop: ' + e)
    }
}

const saveCrop = async (crop: Crop) => {
    crop.cropCode = generateID('CROP')
    try {
        return prisma.crop.create({
            data: crop
        })
    } catch (e) {
        throw new Error('error in save crop: ' + e)
    }
}

const updateCrop = async (cropCode: string, crop: Crop) => {
    try {
        return prisma.crop.update({
            where: {cropCode: cropCode},
            data: crop
        })
    } catch (e) {
        throw new Error('error in update crop: ' + e)
    }
}

const deleteCrop = async (cropCode: string) => {
    try {
        return prisma.crop.delete({
            where: {cropCode: cropCode}
        })
    } catch (e) {
        throw new Error('error in delete crop: ' + e)
    }
}

export { getAllCrops, getCrop, getCropCount, saveCrop , updateCrop, deleteCrop }