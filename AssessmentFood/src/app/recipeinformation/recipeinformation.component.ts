import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { SpoonacularService } from '../spoonacular.service';

@Component({
  selector: 'app-recipeinformation',
  templateUrl: './recipeinformation.component.html',
  styleUrls: ['./recipeinformation.component.css']
})
export class RecipeinformationComponent implements OnInit {

  // constructor() { }
  recipeData: any;
  recipe: any;
  searchResults: any;
  query: string = '';
  recipes: any[] = [];

  constructor(private spoonacularService: SpoonacularService,private searchService: SearchService) {}

  // fetchRecipe(id: number) {
  //   return this.spoonacularService.getRecipeInformation(id).subscribe((data: any) => {
  //     this.recipeData = data;
  //     this.searchResults = data.recipeData;
  //     // console.log(this.recipeData);
  //   });
  // }

  // getRecipeInformation(recipeId: number) {
  //   this.spoonacularService
  //     .getRecipeInformation(recipeId)
  //     .subscribe((data: any) => {
  //       this.searchResults = data.results; // Handle the response data
  //     });
  // }
  // ngOnInit(): void {
  //   this.getRecipeInformation();
  // }

  // getRecipeInformation(): void {
  //   const recipeId = 716429; // Replace with the actual recipe ID
  //   this.spoonacularService.getRecipeInformation(recipeId).subscribe((response: any) => {
  //     this.recipe = response; // Assuming the response contains the recipe object directly
  //   });
  // }

  ngOnInit(): void {
  }

  searchRecipes(event: Event): void {
    event.preventDefault();
    if (this.query.trim() === '') {
      return;
    }
    this.spoonacularService.searchRecipes(this.query).subscribe((response: any) => {
      const ids = response.results.map((recipe: any) => recipe.id);
      this.fetchRecipeInformation(ids);
    });
  }

  fetchRecipeInformation(ids: number[]): void {
    ids.forEach(id => {
      this.spoonacularService.getRecipeInformation(id).subscribe((recipeInfo: any) => {
        this.recipes.push(recipeInfo);
      });
    });
  }
}
