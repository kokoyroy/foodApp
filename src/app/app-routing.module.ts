import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooddetailsComponent } from './dashboard/mainview/fooddetails/fooddetails.component';
import { MainviewComponent } from './dashboard/mainview/mainview.component';


const routes:Routes= [
  {path:':category',component:MainviewComponent},
  {path: 'fooddetails/:id',component:FooddetailsComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
