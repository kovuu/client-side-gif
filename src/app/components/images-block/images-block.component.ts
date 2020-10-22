import {Component, Input, OnInit} from '@angular/core';
import {ServerApiService} from '../../server-api.service';
import {HelperService} from '../../helper.service';

@Component({
  selector: 'app-images-block',
  templateUrl: './images-block.component.html',
  styleUrls: ['./images-block.component.css']
})
export class ImagesBlockComponent implements OnInit{
  userId = localStorage.getItem('userId');

  @Input()
  allImages;

  @Input()
  favourite = false;

  @Input()
  removeFromFavourite = null;

  constructor(private service: ServerApiService,  private helperService: HelperService) { }

  ngOnInit(): void {
    this.helperService.loginStatus$.subscribe(r => this.userId = localStorage.getItem('userId'));
  }

  buttonClickHeader(imgId, isFavourite = false): void {
    if (this.removeFromFavourite) {
      this.removeFromFavourite(imgId);
    } else {
      isFavourite ? this.removeImgFromFavorites(imgId) : this.addImgToFavourites(imgId);
    }
  }

  addImgToFavourites(imgId): void {
      this.service.addImgToFavorites(imgId).subscribe(r => {
        this.changeIsFavouriteStatus(imgId);
      });
  }

  removeImgFromFavorites(imgId): void {
      this.service.removeImgFromFavorites(imgId).subscribe(r => {
        this.changeIsFavouriteStatus(imgId);
      });
  }

  changeIsFavouriteStatus(imgId): void {
    const image = this.allImages.filter(n => n.id === imgId);
    image[0].favourite = !image[0].favourite;
  }
}
