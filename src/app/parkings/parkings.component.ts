import { Component, OnInit } from '@angular/core';
import { ParkingInfo } from '../parkinginfo';
import { ParkingService } from '../parking.service';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.scss']
})
export class ParkingsComponent implements OnInit {

  parkings: ParkingInfo[];
  isLoaded: boolean = false;

  constructor(private parkingService : ParkingService) { }

  ngOnInit(): void {
    this.parkingService.getParking().subscribe(
      reponse => {
        this.parkings = reponse;
        this.isLoaded = true;
      }
    );
   
  }
  styleStatut(parking: ParkingInfo){
    if(parking.statut == 'Ouvert'){
      return{color:'green'}
    }else if (parking.statut == 'Fermé'){
      return{color:'red'}
    }else{
      return{'font-style': 'italic'}
    }
  }
}