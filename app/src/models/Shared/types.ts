import { MealInfo, BGMealInfo, CarbMealInfo } from '../Home/types';

export type ListItem = {
	key: number;
	label: string;
	value: string;
};

export class Meal {
	constructor(json: any = null) {
		if (json) {
			Object.assign(this, json);
		}
	}

	public mealInfo: MealInfo = new MealInfo();
	public bgMealInfo: BGMealInfo = new BGMealInfo();
	public carbMealInfo: CarbMealInfo = new CarbMealInfo();
	public items?: Array<any>; // TODO: Create Item Type
}
