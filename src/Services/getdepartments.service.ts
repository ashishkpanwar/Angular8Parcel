import { Injectable } from '@angular/core';
import xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Shipment } from '../Model/Shipment'
import * as $ from "jquery";

const dep = '../assets/Departments.Json'

@Injectable({
  providedIn: 'root'
})
export class GetdepartmentsService {

  constructor(private _http: HttpClient) { }

  loadjson(): Observable<any> {
    return this._http.get(dep)
  }
}

