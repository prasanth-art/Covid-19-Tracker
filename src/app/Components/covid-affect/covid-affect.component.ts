import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/Services/covid.service';
import { CovidData } from 'src/app/Models/ICovid';
import { from } from 'rxjs';
@Component({
  selector: 'app-covid-affect',
  templateUrl: './covid-affect.component.html',
  styleUrls: ['./covid-affect.component.css']
})
export class CovidAffectComponent implements OnInit {
    results : CovidData;
    dataview= false;
    showspinner=false;

  constructor(private Covid : CovidService) {
   }

  ngOnInit() {
    this.showspinner=true;
     return this.Covid.getData().subscribe((data:any) => {
       this.results=data.data;
       this.dataview=true;
       this.showspinner=false;
    })    
  }
}
