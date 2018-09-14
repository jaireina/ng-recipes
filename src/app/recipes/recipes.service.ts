import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[] = [
    new Recipe(
      "Hornado",
      "Marinated roasted pork leg (or whole body)",
      'http://www.bite.co.nz/images/recipes/Hornado-de-chancho-marinate.jpg?width=375&height=250&mode=crop',
      [
        new Ingredient('pork',1),
        new Ingredient('Ground cumin',2)
      ]
    ),
    new Recipe(
      "Chifrijo",
      "Pork with rice, beans and tomatoes",
      'http://taproottravel.com/wp-content/uploads/2014/10/Chifrijo-featured-image.png',
      [
        new Ingredient('rice',1),
        new Ingredient('tomatoes',2)
      ]
    ),
  ];

  constructor(private shoppingListService:ShoppingListService){}

  getRecipes(){
    return [...this.recipes];
  }

  getRecipe(index:number){
    return {...this.recipes[index]};
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
