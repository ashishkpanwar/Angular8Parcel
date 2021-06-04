import { GetdepartmentsService } from '../services/getdepartments.service';
import { GetshipmentService } from '../services/getshipment.service';
import { Department } from '../model/Department';
import { Shipment } from '../model/Shipment';
import { Observable, throwError } from 'rxjs';
import * as $ from "jquery";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Assigndepartments {
  department: Department[] = [];
  shipment: Shipment
  constructor(
    public rest: GetdepartmentsService,
    public getshipment: GetshipmentService,

  ) {
    this.manageDepartment()
  }
  
  loaddata(): Observable<any> {
    return new Observable<any>((_) => {
      this.getshipment.loadXML().subscribe((y) => {
        this.shipment = y;
        this.rest.loadjson().subscribe((x) => {
        this.department = x;
        _.next();
      });
      });
    });
  }
  manageDepartment(): Observable<Shipment> {
    return new Observable<Shipment>((_) => {
    this.loaddata().subscribe((data) => {
      this.shipment.parcels.forEach(x => {
        this.department.forEach(y => {
            if (x.Weight > +y.MinWeight && x.Weight
              <= +y.MaxWeight) {
              x.departments = y.Name;
            }
        });
      })
      _.next(this.shipment);
      });
    })
  }
  }

