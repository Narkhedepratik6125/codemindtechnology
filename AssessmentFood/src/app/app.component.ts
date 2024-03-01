import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  query: string = ''; // Declare the query property here

  searchResults: any[] = [];

  constructor(private searchService: SearchService) {}

  search(event: Event) { 
    event.preventDefault(); 
    if (this.query.trim() === '') {
      return;
    }
    this.searchService.search(this.query).subscribe((data: any) => {
      this.searchResults = data.results;
    });
  }
}
