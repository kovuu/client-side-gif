import { Component, OnInit } from '@angular/core';
import {ServerApiService} from '../../server-api.service';
import {HelperService} from "../../helper.service";
import {mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  allImages;
  constructor(private service: ServerApiService, private helperService: HelperService) { }

  ngOnInit(): void {
    this.service.getFavouriteUserImages().subscribe(r => {
      this.allImages = r;
    });
    this.helperService.favouriteImages$.pipe(
      mergeMap(r => this.service.getFavouriteUserImages())
    ).subscribe(res => this.allImages = res);
  }

  removeFromFavorites(imageId): void  {
    this.service.removeImgFromFavorites(imageId).subscribe(r => {
        this.helperService.updateFavouriteImages();
    });
  }

}
