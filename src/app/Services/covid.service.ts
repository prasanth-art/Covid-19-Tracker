import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CovidData} from '../Models/ICovid';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CountryData } from '../Models/ICountryWise';
import { TitleCasePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class CovidService {
  data1;
  constructor(private http:HttpClient) {
   
   }
   
     getData():Observable<any> {
      const headers= new HttpHeaders({
       'X-RapidAPI-Key':'9f35ca9270mshe7c2581e61472a7p14556djsnd5011698f737'});
       return this.http.get('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total',{headers:headers})
     }

     getStats(country) :Observable<any>{
       const headers = new HttpHeaders({
        'X-RapidAPI-Key':'9f35ca9270mshe7c2581e61472a7p14556djsnd5011698f737'
       });
      return this.http.get<any>(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${country}`,{headers:headers})
     }
    }
