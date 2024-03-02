import { Component, OnInit } from '@angular/core';

import { SpoonacularService } from '../spoonacular.service';

@Component({
  selector: 'app-instructionsn',
  templateUrl: './instructionsn.component.html',
  styleUrls: ['./instructionsn.component.css']
})
export class InstructionsnComponent implements OnInit {
  searchResults: any;
  constructor( private spoonacularService: SpoonacularService) { }

  
  getAnalyzedInstructions(recipeId: number) {
    this.spoonacularService
      .getAnalyzedInstructions(recipeId)
      .subscribe((data: any) => {
        this.searchResults = data.results; // Handle the response data
      });
  }

  ngOnInit(): void {
  }

}
