import { Component, OnInit } from '@angular/core';
import { HomeService } from './service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {}

  start() {
    //Navigating to Category Page
    this.router.navigate(['categories']);
  }
}
