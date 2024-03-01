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

  constructor(private spoonacularService: SpoonacularService) {}

  fetchRecipe(id: number) {
    this.spoonacularService.getRecipeInformation(id).subscribe((data: any) => {
      this.recipeData = data;
      console.log(this.recipeData);
    });
  }


  ngOnInit(): void {
  }

}
