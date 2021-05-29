import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/services/data.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent  implements OnInit,OnChanges {
subsribe : Subscription;
@Input() data : any ;
  constructor(public dataService : DataService) {

   }
  ngOnChanges(changes: SimpleChanges): void {
 console.log(this.data);
  }

  ngOnInit(): void {
   
  }



 
  


}
