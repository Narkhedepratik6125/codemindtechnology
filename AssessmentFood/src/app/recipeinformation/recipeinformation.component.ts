import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { SpoonacularService } from '../spoonacular.service';

@Component({
  selector: 'app-recipeinformation',
  templateUrl: './recipeinformation.component.html',
  styleUrls: ['./recipeinformation.component.css'],
})
export class RecipeinformationComponent implements OnInit {
  // constructor() { }
  recipeData: any;
  recipe: any;
  searchResults: any;
  query: string = '';
  recipes: any[] = [];

  constructor(
    private spoonacularService: SpoonacularService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {}

  searchRecipes(event: Event) {
    event.preventDefault();
    if (this.query.trim() === '') {
      return;
    }
    this.spoonacularService
      .searchRecipes(this.query)
      .subscribe((response: any) => {
        const ids = response.results.map((recipe: any) => recipe.id);
        this.fetchRecipeInformation(ids);
      });
  }

  fetchRecipeInformation(ids: number[]) {
    ids.forEach((id) => {
      this.spoonacularService
        .getRecipeInformation(id)
        .subscribe((recipeInfo: any) => {
          this.recipes.push(recipeInfo);
        });
    });
  }
}
