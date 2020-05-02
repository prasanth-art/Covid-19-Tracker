import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/Services/covid.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {
  data:any
  results: any;
  constructor(private dataService: CovidService) { }

  ngOnInit() {
}
}


