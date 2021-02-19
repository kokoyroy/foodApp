import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css']
})
export class FooditemComponent implements OnInit {
  @Input() fooditem;
  expanded: boolean = false
  id = ''
  imgURL = '';
  constructor() { }

  ngOnInit(): void {
    this.id = this.fooditem.id;
    this.imgURL = this.fooditem.imageUrl ? this.fooditem.imageUrl : '../../../../assets/images/5828978.jpg'
  }
  expand(element: HTMLElement) {
    element.classList.toggle('footerexpand');
    element.classList.toggle('footer');
    if (element.classList.contains('footerexpand')) {
      this.expanded = true;
    } else this.expanded = false 
    console.log(element.classList);


    // .classlist

  }


}
