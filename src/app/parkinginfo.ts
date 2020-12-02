import { StringifyOptions } from 'querystring';

export interface ParkingInfo{
    identifiant: number;
    nom: string;
    nbPlacesDispo: number;
    nbPlacesTotal: number;
    statut: string;
    heureMaj: string;

}