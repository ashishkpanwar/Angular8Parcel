import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Assigndepartments } from '../../BL/assigndepartments'
import { Shipment } from '../../model/Shipment';
import { Parcel } from '../../model/Parcel';



@Component({
  selector: 'app-parcelhandel',
  templateUrl: './parcelhandel.component.html',
  styleUrls: ['./parcelhandel.component.css']
})
export class ParcelhandelComponent implements OnInit {
  shipment: Shipment
  parcesl: Parcel[] = [];

  constructor(public rest: Assigndepartments
) { }

  ngOnInit() {
    this.rest.manageDepartment().subscribe((data) => {
      this.shipment = data;
      this.parcesl=this.shipment.parcels
      //console.log(this.parcesl)
    })
  }

}
