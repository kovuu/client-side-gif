import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getImage(link): Observable<Blob> {
     return this.http.get(link, {responseType: 'blob'});
  }
}
