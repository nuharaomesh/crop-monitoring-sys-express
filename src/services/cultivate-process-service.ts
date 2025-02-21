import prisma from "../db/prisma-data-store";
import {saveCultivation} from "./cultivate-service";
import {generateID} from "../util/app-util";
import Cultivate from "../models/Cultivate";
import {updateFieldCultivation} from "./field-service";
import {saveCultivateAssignment} from "./cultivate-assignment-service";
import { log } from "console";

const processCultivation = async (data: any) => {
    try {
        
        const {cropCode, fieldCode, staffs} = data
        console.log("Data", cropCode, fieldCode, staffs);
        return await prisma.$transaction(async (tx) => {
            const cultivateID = generateID("CULTIVATE")
            const cultivateData: Cultivate = {cultivateID, cropCode, fieldCode}
            const addCultivation = await saveCultivation(tx, cultivateData)

            const updateField = await updateFieldCultivation(tx, fieldCode)

            const addCultivationAssignment = await saveCultivateAssignment(tx, cultivateID, staffs)
            if (!cultivateData || !addCultivation || !updateField) {
                throw new Error("cultivation is not processed!")
            }
            return { addCultivation, updateField, addCultivationAssignment }
        })
    } catch (e) {
        throw new Error('Cultivation not handled! - error occurs' + e)
    }
}

export { processCultivation }
