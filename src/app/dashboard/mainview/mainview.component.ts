import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/Services/http-service.service';
import { switchMap } from 'rxjs/operators'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit, OnDestroy {
  id: string
  foodsArray: []
  subscription: Subscription

  constructor(private acticeRooute: ActivatedRoute, private http: HttpService) { }

  ngOnInit(): void {
    //after rxjs V6+ needs pipe method to chain operators
    this.subscription = this.acticeRooute.paramMap.pipe(
      //switchMap operator Cancels all the http requests when url category parameter changes
      switchMap(
        parameters => {
          this.id = parameters.get('category')
          //returns an observable and cancel the previews one if change occur on 1st obs
          return this.http.getfoodArrayByCategory(this.id)
        })).subscribe((params) => {
          //business as usual
          for (const key in params) {
            this.foodsArray = params[key]
            console.log(params[key]);
          }
        })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }



  // this.acticeRooute.paramMap.subscribe((params) => {
  //   this.id = params.get('category')
  //   this.http.getfoodArrayByCategory(this.id).subscribe((params) => {
  //     for (const key in params) {
  //       this.foodsArray = params[key]
  //       console.log(this.foodsArray);
  //     }

  //   })
  // })



}
