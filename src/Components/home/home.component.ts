import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  records : Array<any> = [];
  item : any = {};
  constructor(public dataService : DataService) { }

  ngOnInit(): void {
    this.getData();

  }
  
  public getData(){
   
    if(this.records.length == 0){
    this.dataService.getData().subscribe((result : any)=>{
      this.records = result;    
    })
  }
}
setDescription(item){
this.item = item;
}



  

}
