import { Injectable } from '@angular/core';
import { ParkingInfo } from './parkinginfo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParkingService { 

  constructor(private httpClient : HttpClient) { }

  getParking(): Observable<ParkingInfo[]>{
    return this.httpClient.get<ParkingInfo[]>(environment.apiUrl + '/parkings');
  }

    getOneParking(id: number): Observable<ParkingInfo> {
      return this.httpClient.get<ParkingInfo[]>(environment.apiUrl + '/parkings').pipe(
        map(parkings => parkings.find(parking => parking.identifiant === id))
      );
    }
  }

