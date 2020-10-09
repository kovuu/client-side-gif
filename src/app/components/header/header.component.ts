import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userId = localStorage.getItem('userId');
  constructor() {}

  ngOnInit(): void {
    console.log(this.userId);
  }


  logout(): void {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    location.reload();
  }
}
