import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidAffectComponent } from './Components/covid-affect/covid-affect.component';
import { GetDataComponent } from './Components/get-data/get-data.component';
import { CountryWiseComponent } from './Components/country-wise/country-wise.component';


const routes: Routes = [
  {path: '', component: GetDataComponent},
  {path:'covid-affect', component:CovidAffectComponent},
  {path:'country-wise', component:CountryWiseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
