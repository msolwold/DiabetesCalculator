import { MealInfo, BGMealInfo, CarbMealInfo } from "../Home/types";

export type ListItem = {
	key: number;
	label: string;
	value: string;
};

export type Meal = {
	mealInfo: MealInfo | undefined,
	bgMealInfo: BGMealInfo | undefined,
	carbMealInfo: CarbMealInfo | undefined,
	items?: Array<any>, // TODO: Create Item Type
}


