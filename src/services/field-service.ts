import prisma from "../db/prisma-data-store";
import { generateID } from "../util/app-util";
import Field from "../models/Field";

const getAllFields = async () => {
    try {
        return prisma.field.findMany()
    } catch (e) {
        throw new Error('error in get all fields: ' + e)
    }
}

const getField = async (fieldCode: string) => {
    try {
        return prisma.field.findUnique({
            where: {fieldCode: fieldCode}
        })
    } catch (e) {
        throw new Error('error in get field: ' + e)
    }
}

const saveField = async (field: Field) => {
    field.fieldCode = generateID('CROP')
    try {
        return prisma.field.create({
            data: field
        })
    } catch (e) {
        throw new Error('error in save field: ' + e)
    }
}

const updateField = async (fieldCode: string, field: Field) => {
    try {
        return prisma.field.update({
            where: {fieldCode: fieldCode},
            data: field
        })
    } catch (e) {
        throw new Error('error in update field: ' + e)
    }
}

const deleteField = async (fieldCode: string) => {
    try {
        return prisma.field.delete({
            where: {fieldCode: fieldCode}
        })
    } catch (e) {
        throw new Error('error in delete field: ' + e)
    }
}

export { getAllFields, getField, saveField, updateField, deleteField }