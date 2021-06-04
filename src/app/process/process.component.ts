import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ParcelhandelComponent } from '../parcelhandel/parcelhandel.component'


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //console.log(this.route.snapshot.paramMap.get('id'));
    //console.log(ParcelhandelComponent.parcesl);
  }

}
