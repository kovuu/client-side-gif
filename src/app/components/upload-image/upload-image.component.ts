import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ServerApiService} from '../../server-api.service';
import {ImageService} from '../../image.service';
import {Router} from '@angular/router';
import {TestServiceService} from '../../test-service.service';
import set = Reflect.set;

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  uploadForm;
  selectedImage: File;
  imageLink: string;
  message: string;
  status = false;

  constructor(private formBuilder: FormBuilder, private apiService: ServerApiService,  private route: Router, private testService: TestServiceService) {
    this.uploadForm = this.formBuilder.group({
      image: [''],
      image_url: ['']
    });
  }

  ngOnInit(): void {
  }

  onFileChanged(event): void {
    this.selectedImage = event.target.files[0];
  }

  blobToFile(theBlob: Blob, fileName: string): File {
    const b: any = theBlob;
    b.lastModifiedDate = new Date();
    b.name = fileName;
    return theBlob as File;
  }


  downloadImage(event): void {
    this.imageLink = event.target.value.trim();
  }

  uploadImage(data): void {
    console.log(this.selectedImage);
    if (this.selectedImage) {
      this.apiService.uploadImage(this.selectedImage).subscribe(r => {
        this.status = true;
        this.message = r.message;
        this.testService.subject$.next(true);
      }, error => {
        this.status = false;
        this.message = error.reason.message;
      });
    } else if (this.imageLink) {
      this.apiService.uploadImgFromLink(data).subscribe(r => {
        this.status = true;
        this.message = r.message;
        this.testService.subject$.next(true);

      }, error => {
        this.status = false;
        this.message = error.reason.message;

      });
    }
    this.uploadForm.reset();
    this.imageLink = '';
    this.selectedImage = null;
  }

}
