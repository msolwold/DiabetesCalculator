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
		currentBG: number = 0,
		correction: boolean = false,
		correctionUnits: number = 0
	) {
		this.currentBG = currentBG;
		this.correction = correction;
		this.correctionUnits = correctionUnits;
	}

	public currentBG: number;
	public targetBG: number = 120; // TODO: pull from storage
	public correction: boolean;
	public correctionUnits?: number;
}

export class CarbMealInfo {
	constructor(
		mealCarbs: number = 0,
		carbsPerUnit: number = 0,
		insulinDose: number = 0
	) {
		this.mealCarbs = mealCarbs;
		this.carbsPerUnit = carbsPerUnit;
		this.insulinDose = insulinDose;
    }
    
	public mealCarbs: number;
	public carbsPerUnit: number;
	public insulinDose: number;
}
