const saveCultivateAssignment = async (tx: any, cultivateID: string, staffList: string[]) => {
    try {
        return await Promise.all(
            staffList.map(async (staffID: string) => {
                await tx.cultivateAssignment.create({
                    data: {
                        cultivateID: cultivateID,
                        staffID: staffID,
                        startDate: new Date().toISOString()
                    }
                })
            })
        )

    } catch (e) {
        throw new Error('error in save field assignment: ' + e)
    }
}

export {saveCultivateAssignment}