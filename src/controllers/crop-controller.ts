import { Request, Response} from "express";
import {Crop} from "../models/Crop";
import {deleteCrop, getAllCrops, getCrop, saveCrop, updateCrop} from "../services/crop-service";
import {extractImg} from "../util/app-util";

const fetchAllCrops = async (req: Request, res: Response) => {
    try {
        const allCrops = await getAllCrops()
        res.status(200).json(allCrops)
    } catch (e) {
        res.status(404).send('Not found')
        console.log('error in fetch all crop: ', e)
    }
}

const fetchCrop = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const crop = await getCrop(id)
        res.status(200).json(crop)
    } catch (e) {
        res.status(404).send('Not found')
        console.log('error in fetch crop: ', e)
    }
}

const postCrop = async (req: Request, res: Response) => {
    const crop: Crop = req.body
    crop.img = extractImg(req)
    try {
        const savedCrop = await saveCrop(crop)
        res.status(200).json(savedCrop)
    } catch (e) {
        res.status(500).send('Internal server error!')
        console.log('error in post crop: ', e)
    }
}

const putCrop = async (req: Request, res: Response) => {
    const id = req.params.id
    const crop: Crop = req.body
    crop.img = extractImg(req)
    try {
        const updatedCrop = await updateCrop(id, crop)
        res.status(200).json(updatedCrop)
    } catch (e) {
        res.status(500).send('Internal server error!')
        console.log('error in put crop: ', e)
    }
}

const removeCrop = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const deletedCrop = await deleteCrop(id)
        res.status(200).json(deletedCrop)
    } catch (e) {
        res.status(500).send('Internal server error!')
        console.log('error in remove crop: ', e)
    }
}

export { fetchAllCrops, fetchCrop, postCrop, putCrop, removeCrop }