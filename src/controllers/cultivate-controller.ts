import {Request, Response} from "express";
import {deleteCultivation, getAllCultivations, getCultivation, saveCultivation, updateCultivation} from "../services/cultivate-service";
import Cultivate from "../models/Cultivate";

const fetchAllCultivations = async (req: Request, res: Response) => {
    try {
        const allCultivation = await getAllCultivations()
        res.status(200).json(allCultivation)
    } catch (e) {
        res.status(404).send('Not found')
        console.log('error in fetch all cultivations: ', e)
    }
}

const fetchCultivation = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const cultivation = await getCultivation(id)
        res.status(200).json(cultivation)
    } catch (e) {
        res.status(404).send('Not found')
        console.log('error in fetch cultivation: ', e)
    }
}

const postCultivation = async (req: Request, res: Response) => {
    const cultivation: Cultivate = req.body
    try {
        const savedCultivation = await saveCultivation(cultivation)
        res.status(200).json(savedCultivation)
    } catch (e) {
        res.status(500).send('Internal server error!')
        console.log('error in post cultivation: ', e)
    }
}

const putCultivation = async (req: Request, res: Response) => {
    const id = req.params.id
    const cultivate: Cultivate = req.body
    try {
        const updatedCultivation = await updateCultivation(id, cultivate)
        res.status(200).json(updatedCultivation)
    } catch (e) {
        res.status(500).send('Internal server error!')
        console.log('error in put cultivation: ', e)
    }
}

const removeCultivation = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const deletedCultivation = await deleteCultivation(id)
        res.status(200).json(deleteCultivation)
    } catch (e) {
        res.status(500).send('Internal server error!')
        console.log('error in remove cultivation: ', e)
    }
}

export { fetchAllCultivations, fetchCultivation, postCultivation, putCultivation, removeCultivation }