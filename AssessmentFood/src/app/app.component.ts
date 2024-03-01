// import { Component } from '@angular/core';
// import { SearchService } from './search.service';
// import { SpoonacularService } from './spoonacular.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   query: string = ''; // Declare the query property here

//   searchResults: any[] = [];

//   constructor(private searchService: SearchService, private spoonacularService: SpoonacularService) {}

//   search(event: Event) {
//     event.preventDefault();
//     if (this.query.trim() === '') {
//       return;
//     }
//     this.searchService.search(this.query).subscribe((data: any) => {
//       this.searchResults = data.results;
//     });
//   }
// }

import { Component } from '@angular/core';
import { SpoonacularService } from './spoonacular.service';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  query: string = ''; // Declare the query property here

  searchResults: any[] = [];
  searchText: string = '';

  constructor(
    private searchService: SearchService,
    private spoonacularService: SpoonacularService
  ) {}

  // searchRecipes() {
  //   this.spoonacularService.searchRecipes('chicken').subscribe((data: any) => {
  //     console.log(data); // Handle the response data
  //   });
  // }

  search(event: Event) {
    event.preventDefault();
    if (this.query.trim() === '') {
      return;
    }
    this.searchService.search(this.query).subscribe((data: any) => {
      this.searchResults = data.results;
    });
  }

  getRecipeInformation(recipeId: number) {
    this.spoonacularService
      .getRecipeInformation(recipeId)
      .subscribe((data: any) => {
        this.searchResults = data.results; // Handle the response data
      });
  }

  getAnalyzedInstructions(recipeId: number) {
    this.spoonacularService
      .getAnalyzedInstructions(recipeId)
      .subscribe((data: any) => {
        this.searchResults = data.results; // Handle the response data
      });
  }
}
