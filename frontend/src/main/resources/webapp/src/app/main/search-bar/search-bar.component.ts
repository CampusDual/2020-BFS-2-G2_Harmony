import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  value: string;
  constructor() { }

  
  logChanges(){
    console.log("Search bar value updated: "+this.value);
  }


  search(){
    
  }
  ngOnInit() {
  }
  
}
