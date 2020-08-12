import { ListItem } from "./types";
import { DiabetesCalculator } from "./enumerations";

export const mealTypes: Array<ListItem> = [
    { key: DiabetesCalculator.MealType.Breakfast, label: 'Breakfast', value: 'breakfast'},
    { key: DiabetesCalculator.MealType.Lunch, label: 'Lunch', value: 'lunch'},
    { key: DiabetesCalculator.MealType.Dinner, label: 'Dinner', value: 'dinner'},
    { key: DiabetesCalculator.MealType.Snack, label: 'Snack', value: 'snack'},
];