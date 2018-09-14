import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id:number;

  constructor(private recipesService:RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //this works only the first time one recipe is selected
    //const id = this.activatedRoute.snapshot.params['id'];

    this.activatedRoute.params
      .subscribe((params:Params)=>{
        this.id = +params['id'];
        this.recipe = this.recipesService.getRecipe(this.id);
      });
  }

  onAddToShoppingList(){
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.activatedRoute});
  }
}
