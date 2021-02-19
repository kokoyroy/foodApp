import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
  fooddetails
  subscription: Subscription
  getSidebarMenu() {
    return this.http.get('https://us-central1-smartup-hr-test-frontend.cloudfunctions.net/menu')
  }
  getfoodArrayByCategory(id: string) {
    return this.http.get(`https://us-central1-smartup-hr-test-frontend.cloudfunctions.net/categories/${id}`)
  }

  getFoodDetails(id: String):Observable<any> {
    return this.http.get(`https://us-central1-smartup-hr-test-frontend.cloudfunctions.net/items/${id}`)
  }
}


