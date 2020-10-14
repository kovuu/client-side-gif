import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../helper.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userId = localStorage.getItem('userId');
  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    console.log(localStorage.getItem('userId'));
    this.helperService.loginStatus$.subscribe(r => this.userId = localStorage.getItem('userId'));
  }


  logout(): void {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    location.reload();
  }
}
