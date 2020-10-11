import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ServerApiService} from '../../server-api.service';
import {TestServiceService} from '../../test-service.service';
import {HelperService} from "../../helper.service";
import {mergeMap, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-images-block',
  templateUrl: './images-block.component.html',
  styleUrls: ['./images-block.component.css']
})
export class ImagesBlockComponent implements OnInit {
  @Input()
  allImages;


  constructor(private service: ServerApiService, private testService: TestServiceService, private helperService: HelperService) { }

  ngOnInit(): void {

  }

  buttonClickHeader(isFavourite, imgId): void {
    isFavourite ? this.removeImgFromFavorites(imgId) : this.addImgToFavourites(imgId);
  }

  addImgToFavourites(imgId): void {
      this.service.addImgToFavorites(imgId).subscribe(r => this.helperService.updateAllImages());
  }

  removeImgFromFavorites(imgId): void {
    this.service.removeImgFromFavorites(imgId).subscribe(r => this.helperService.updateAllImages());
  }

}
