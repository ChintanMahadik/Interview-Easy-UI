import { Component, OnInit } from '@angular/core';
import { HomeService } from './service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) {
    
   }

  ngOnInit(): void {
  }

  start(){
    this.homeService.getHomeStartMessage().subscribe(response=>{
      alert(response);
    })
  }
}
