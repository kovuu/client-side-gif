import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  allImages$ = new Subject();
  favouriteImages$ = new Subject();
  filteredByTagsImages$ = new Subject();
  loginStatus$ = new Subject();

  updateFavouriteImages(): void {
    this.favouriteImages$.next();
  }

  updateLoginStatus(): void {
    this.loginStatus$.next();
  }
}
