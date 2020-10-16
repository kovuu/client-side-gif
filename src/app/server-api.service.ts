import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL} from '../consts/connect';

@Injectable({
  providedIn: 'root'
})
export class ServerApiService {
  private baseURL: string = BASE_URL;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get(this.baseURL + '/users');
  }

  loginUser(data): Observable<any> {
    return this.http.post(this.baseURL + '/login', data);
  }

  getUser(userId): Observable<any> {
    return this.http.get(this.baseURL + `/users/${userId}`);
  }

  registerUser(data): Observable<any> {
    return this.http.post(this.baseURL + '/register', data);
  }

  uploadImage(image, data): Observable<any> {
    const uploadData = new FormData();
    uploadData.append('image', image);
    uploadData.append('tags', data.tags);
    return this.http.post(this.baseURL + '/upload', uploadData);
  }

  uploadImgFromLink(data): Observable<any> {
    return this.http.post(this.baseURL + '/upload_from_link', data);
  }

  addImgToFavorites(imgId): Observable<any> {
    return this.http.put(this.baseURL + '/toFavs', {imgId});
  }

  removeImgFromFavorites(imgId): Observable<any> {
    const httpParams = new HttpParams().set('imgId', imgId);
    const options = { params: httpParams };
    return this.http.delete(this.baseURL + '/removeFromFavs', options);

  }

  getFavouriteUserImages(): Observable<any> {
    return this.http.get(this.baseURL + '/profile/images');
  }

  getAllImages(tags = ''): Observable<any> {
    const params = new HttpParams().set('tags', tags);
    return this.http.get(this.baseURL + '/images', {params});
  }
}
