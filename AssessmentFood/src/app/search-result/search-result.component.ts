import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  query: string = ''; // Declare the query property here

  searchResults: any[] = [];
  searchText: string = '';

  constructor(private searchService:SearchService) { }

  
  search(event: Event) {
    event.preventDefault();
    if (this.query.trim() === '') {
      return;
    }
    this.searchService.search(this.query).subscribe((data: any) => {
      this.searchResults = data.results;
    });
  }

  ngOnInit(): void {
  }

}
