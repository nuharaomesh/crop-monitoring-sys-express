import { Request, Response} from "express";
import {extractImg} from "../util/app-util";
import {deleteField, getAllFields, getField, saveField, updateField} from "../services/field-service";
import Field from "../models/Field";

const fetchAllFields = async (req: Request, res: Response) => {
    try {
        const allFields = await getAllFields()
        res.status(200).json(allFields)
    } catch (e) {
        res.status(404).send('Not found')
        console.log('error in fetch all fields: ', e)
    }
}

const fetchField = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const field = await getField(id)
        res.status(200).json(field)
    } catch (e) {
        res.status(404).send('Not found')
        console.log('error in fetch field: ', e)
    }
}

const postField = async (req: Request, res: Response) => {
    const field: Field = req.body
    field.img = extractImg(req)
    field.fieldSize = Number(field.fieldSize)
    try {
        const savedField = await saveField(field)
        res.status(200).json(savedField)
    } catch (e) {
        res.status(500).send('Internal server error!')
        console.log('error in post field: ', e)
    }
}

const putField = async (req: Request, res: Response) => {
    const id = req.params.id
    const field: Field = req.body
    field.fieldSize = Number(field.fieldSize)
    field.img = extractImg(req)
    try {
        const updatedField = await updateField(id, field)
        res.status(200).json(updatedField)
    } catch (e) {
        res.status(500).send('Internal server error!')
        console.log('error in put field: ', e)
    }
}

const removeField = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const deletedField = await deleteField(id)
        res.status(200).json(deletedField)
    } catch (e) {
        res.status(500).send('Internal server error!')
        console.log('error in remove field: ', e)
    }
}

export  { fetchAllFields, fetchField, postField, putField, removeField }