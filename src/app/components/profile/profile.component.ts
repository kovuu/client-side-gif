import { Component, OnInit } from '@angular/core';
import {ServerApiService} from '../../server-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  allImages;
  constructor(private service: ServerApiService) { }

  ngOnInit(): void {
    this.service.getFavouriteUserImages(localStorage.getItem('userId')).subscribe(r => {
      console.log(r);
      this.allImages = r;
    });
  }

}
