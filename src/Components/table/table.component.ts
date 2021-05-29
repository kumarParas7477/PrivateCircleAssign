import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() set data(records){
this.filteredData = records;
this._data = records;
  }
  _data :Array<any>=[]
  records : Array<any> =[];
  filteredData : Array<any> =[];
  Subscribe : Subscription;
  @Output() selectedItem : EventEmitter<any> = new EventEmitter<any>();
  constructor(public dataService : DataService) {
    this.Subscribe = dataService.subscribeSearch().subscribe((data) =>{this.filterResult(data)});
   }

  ngOnInit(): void {
    // this.getData();
  }

  filterResult = (str) =>{
    if(str == null || str == ''){
      this.filteredData = this._data;
      return;

    }
this.filteredData = this._data.filter((a)=>{ return a.name.toLowerCase().indexOf(str.toLowerCase()) > -1});

 }


  public emitIndex =(item) =>{
    this.selectedItem.emit(item)
  }

  }

 
  

// }
