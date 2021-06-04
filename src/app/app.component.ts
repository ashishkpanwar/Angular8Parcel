import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GetshipmentService } from '../Services/getshipment.service'
import { Assigndepartments} from '../BL/assigndepartments'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ParcelDelivery';
  constructor(
  ) { }

  ngOnInit() {
    //this.search();

  }
  //search(): void {

    
}
