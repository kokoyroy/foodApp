import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/Services/http-service.service';
import { FoodDetails } from 'src/app/topModels/food-details';

@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrls: ['./fooddetails.component.css']
})
export class FooddetailsComponent implements OnInit, OnDestroy {
  id: string;
  fooditem: FoodDetails
  loaded = false
  subscription: Subscription
  constructor(private actroute: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit(): void {
    this.loaded = false
    this.subscription = this.actroute.paramMap.pipe(
      switchMap(param => {
        this.id = param.get('id')
        return this.httpService.getFoodDetails(this.id)
      })
    ).subscribe((params) => {
      this.fooditem = { ...params }
      console.log(this.fooditem);
      this.loaded = true
    })


  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
