import {GrowTime, Season} from "@prisma/client";

export class Crop {
    cropCode!: string
    cropName!: string
    cropScientificName!: string
    category!: string
    cropSeason!: Season
    cropGrowthTime!: GrowTime
    cropImg!: Buffer
}