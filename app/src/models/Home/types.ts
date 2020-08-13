import { DiabetesCalculator } from '../Shared/enumerations';

export class MealInfo {
	constructor(
		mealName: string = '',
		mealType: DiabetesCalculator.MealType = -1,
		mealDate: Date = new Date()
	) {
		this.mealName = mealName;
		this.mealType = mealType;
		this.mealDate = mealDate;
	}

	public mealDate: Date;
	public enteredDate: Date = new Date();
	public mealType: DiabetesCalculator.MealType | -1;
	public mealName: string;
	public description?: string;
}

export class BGMealInfo {
	constructor(
		currentBG: number | undefined = undefined,
		correction: boolean = false,
		correctionUnits: number = 0
	) {
		this.currentBG = currentBG;
		this.correction = correction;
		this.correctionUnits = correctionUnits;
	}

	public currentBG: number | undefined;
	public targetBG: number = 120; // TODO: pull from storage
	public correction: boolean;
	public correctionUnits?: number;
}

export class CarbMealInfo {
	constructor(
		mealCarbs: number | undefined = undefined,
		carbsPerUnit: number = 0,
		insulinDose: number = 0
	) {
		this.mealCarbs = mealCarbs;
		this.carbsPerUnit = carbsPerUnit;
		this.insulinDose = insulinDose;
    }
    
	public mealCarbs: number | undefined;
	public carbsPerUnit: number;
	public insulinDose: number;
}
