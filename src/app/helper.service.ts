import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  allImages$ = new Subject();
  favouriteImages$ = new Subject();
  filteredByTagsImages$ = new Subject();

  constructor() { }

  updateAllImages(): void {
    this.allImages$.next(true);
  }

  updateFavouriteImages(): void {
    this.favouriteImages$.next();
  }
}
