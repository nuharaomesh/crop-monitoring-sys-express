import { log } from "console";
import prisma from "../db/prisma-data-store";
import User from "../models/User";
import bcrypt from 'bcrypt'

const verifyUser = async (verifyUser: User): Promise<boolean> => {
    try {
        const user = await prisma.user.findUnique({
            where: { username: verifyUser.username }
        })
        
        if (!user) return false
        return await bcrypt.compare(verifyUser.password, user.password)
    } catch (e) {
        throw new Error('error in verify user' + e)
    }
}

const saveUser = async (data: User) => {
    const hashedPassword = await bcrypt.hash(data.password, 10)

    try {
        return await prisma.user.create({
            data: {
                username: data.username,
                password: hashedPassword
            }
        })
    } catch (e) {
        throw new Error('error in save user' + e)
    }
}

export {verifyUser, saveUser}