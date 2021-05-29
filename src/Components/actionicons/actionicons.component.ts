import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actionicons',
  templateUrl: './actionicons.component.html',
  styleUrls: ['./actionicons.component.css']
})
export class ActioniconsComponent implements OnInit {
  @Input() date : string ;
  constructor() { }

  ngOnInit(): void {
  }

}
