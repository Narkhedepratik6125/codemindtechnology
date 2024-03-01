// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class SearchService {

//   constructor(private http: HttpClient) { }

//   search(query: string) {
//     return this.http.get(`https://api.spoonacular.com/recipes/complexSearch=efb0ff4091ce4fe38a0d4bf8e6555559?q=${query}`);
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiKey: string = 'efb0ff4091ce4fe38a0d4bf8e6555559'; // Replace with your Spoonacular API key

  private baseUrl = 'https://api.spoonacular.com/recipes/';

  constructor(private http: HttpClient) { }

  search(query: string) {
    return this.http.get(`https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${this.apiKey}`);
  }

}
