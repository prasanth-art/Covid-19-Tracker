import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/Services/covid.service';
import { CountryData } from 'src/app/Models/ICountryWise';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormControl,FormGroup } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-country-wise',
  templateUrl: './country-wise.component.html',
  styleUrls: ['./country-wise.component.css']
})
export class CountryWiseComponent implements OnInit {
  countrywise : any;
  country='';
  countryview= false;
  showspinner=false;
  errormsg=false;
  validmsg=false;
  showError=false;
  constructor(private Country:CovidService, private snackbar: MatSnackBar) { }
 
  submit() {
    this.showspinner=true;
    return this.Country.getStats(this.country).subscribe((data:any) => {
      if(data.data.covid19Stats)
      {
        // console.log(data.data);
        for( var i=0;i<data.data.covid19Stats.length;i++)
        {
          if(data.data.covid19Stats[i].country==this.country)
          {
            this.errormsg=false;
            this.countrywise=data.data;
            // this.showspinner=true;
            this.countryview=true;
            this.showspinner=false;
            console.log(this.countrywise);          
          }
          else {
            this.showspinner=false;
            this.countryview=false;
            this.errormsg=true;
            break;
          }
        }
      }
      else {
        this.errormsg=true;
        this.showspinner=false;
      }
      
    })
  }
  ngOnInit() {
  }
  }
 
