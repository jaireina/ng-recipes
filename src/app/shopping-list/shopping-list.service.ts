import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients:Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("Tomatoes", 10)
  ];

  getIngredients(){
    return [...this.ingredients];
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.emitIngredientsChanged();
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.emitIngredientsChanged();
  }

  emitIngredientsChanged(){
    this.ingredientsChanged.emit([...this.ingredients]);
  }
}