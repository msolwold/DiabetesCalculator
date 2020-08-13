import { DiabetesCalculator } from "../Shared/enumerations"

export type MealInfo = {
    mealDate: Date,
    enteredDate: Date,
    mealType: DiabetesCalculator.MealType | -1,
    mealName: string,
    description?: string
}

export type BGMealInfo = {
    currentBG: number,
    targetBG: number,
    correction: boolean,
    correctionUnits?: number,
}

export type CarbMealInfo = {
    mealCarbs: number,
    carbsPerUnit: number,
    insulinDose: number,
}