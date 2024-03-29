import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpoonacularService {
  private apiKey = 'efb0ff4091ce4fe38a0d4bf8e6555559';
  private baseUrl = 'https://api.spoonacular.com';
  getAnalyzedInstructions: any;

  constructor(private http: HttpClient) {}

  searchRecipes(searchText: string): Observable<any> {
    const url = `${this.baseUrl}/recipes/complexSearch?query=${searchText}&number=5&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  getRecipeInformation(id: number): Observable<any> {
    const url = `${this.baseUrl}/recipes/${id}/information?includeNutrition=false&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  getInstructions(id: number): Observable<any> {
    const url = `${this.baseUrl}/recipes/${id}/instructions?includeNutrition=false&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  
}
