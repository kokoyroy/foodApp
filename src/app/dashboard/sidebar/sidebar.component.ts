import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menu :[]
  constructor(private HttpService: HttpService) { }

  ngOnInit(): void {
  this.HttpService.getSidebarMenu().subscribe((params) => {
    for(let key in params){
      this.menu= params[key]
    }
    console.log(this.menu);
    
  })

  }

}
