import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  _searchString : String = null;
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }

  set searchString(str){
    this._searchString = str;
    this.dataService.publishSearch(this._searchString);

  }
  get searchString(){
    return this._searchString;
  }
}
