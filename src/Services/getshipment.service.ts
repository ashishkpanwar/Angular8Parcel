import { Injectable } from '@angular/core';
import xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { Shipment } from '../Model/Shipment'
import * as $ from "jquery";

const Url = '../assets/Container_68465468.xml';
const dep='../assets/Departments.Json'
@Injectable({
  providedIn: 'root'
})
export class GetshipmentService {
  public xmlItems: any;
  constructor(private _http: HttpClient) {

  }
  loadXML(): Observable<any> {
    return new Observable<any>((resolve) => {
      var shipment = new Shipment();
      this._http.get(Url,
        {
          headers: new HttpHeaders()
            .set('Content-Type', 'text/xml')
            .append('Access-Control-Allow-Methods', 'GET')
            .append('Access-Control-Allow-Origin', '*')
            .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
          responseType: 'text'
        })
        .subscribe((data) => {
          this.parseXML(data)
            .subscribe((data) => {
             // console.log(data);

              //this.Shipments = data.Id;
              shipment = data;
              //next(position) {
              //  console.log('Current Position: ', position);
              //}
              resolve.next(shipment);
            });
        });

    });

  }

  parseXML(data): Observable<any> {
    //console.log(data);
    return new Observable<any>((resolve) => {
      var shipment = new Shipment();
      var arr:any[],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
        parser.parseString(data, function (err, result) {
        shipment.Id = result.Container.Id;
        shipment.ShippingDate = result.Container.ShippingDate;
        shipment.parcels = result.Container.parcels[0].Parcel;
        var id :number= 0;
        shipment.parcels.forEach(x =>
        {
          x.Weight = x.Weight[0];
          x.Value = +x.Value[0];
          x.Signed = false;
          x.id = id++;
          //senedr data
          x.Sender = x.Sender[0];
          x.Sender.Name = x.Sender.Name[0];
          x.Sender.CcNumber = (x.Sender.CcNumber === undefined) ? '' : x.Sender.CcNumber[0];
          x.Sender.Address = x.Sender.Address[0];
          x.Sender.Address.Street = x.Sender.Address.Street[0];
          x.Sender.Address.HouseNumber = x.Sender.Address.HouseNumber[0];
          x.Sender.Address.PostalCode = x.Sender.Address.PostalCode[0];
          x.Sender.Address.City = x.Sender.Address.City[0];

          // receipents data
          x.Receipient = x.Receipient[0];
          x.Receipient.Name = x.Receipient.Name[0];
          x.Receipient.CcNumber = (x.Receipient.CcNumber === undefined) ? '' : x.Receipient.CcNumber[0];
          x.Receipient.Address = x.Receipient.Address[0];
          x.Receipient.Address.Street = x.Receipient.Address.Street[0];
          x.Receipient.Address.HouseNumber = x.Receipient.Address.HouseNumber[0];
          x.Receipient.Address.PostalCode = x.Receipient.Address.PostalCode[0];
          x.Receipient.Address.City = x.Receipient.Address.City[0];

        })
      });
        resolve.next(shipment);
    });
  }  
}
