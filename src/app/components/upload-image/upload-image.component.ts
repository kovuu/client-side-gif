import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ServerApiService} from '../../server-api.service';
import {Router} from '@angular/router';
import {TestServiceService} from '../../test-service.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent  {
  uploadForm;
  selectedImage: File;
  imageLink: string;
  message: string;
  status = false;
  link = 'link';
  comp = 'comp';
  showInputFromComp = false;
  showInputFromLink = false;

  constructor(private formBuilder: FormBuilder, private apiService: ServerApiService,  private route: Router, private testService: TestServiceService) {
    this.uploadForm = this.formBuilder.group({
      image: [''],
      image_url: [''],
      tags: ['']
    });
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
    if (this.selectedImage) {
      this.apiService.uploadImage(this.selectedImage, data).subscribe(r => {
        this.getResponse(r);
      }, error => {
        this.getErrorResponse(error);
      });
    } else if (this.imageLink) {
      this.apiService.uploadImgFromLink(data).subscribe(r => {
        this.getResponse(r);
      }, error => {
        this.getErrorResponse(error);
      });
    }
    this.uploadForm.reset();
    this.imageLink = '';
    this.selectedImage = null;
  }

  private getResponse(response): void {
    this.status = true;
    this.message = response.message;
    setTimeout(() => {
      this.message = null;
    }, 3000);
  }

  private getErrorResponse(error): void {
    this.status = false;
    this.message = error.reason.message;
  }

  handleRadio(event): void {
    const mode = event.target.defaultValue;
    if (mode === 'comp') {
      this.showInputFromComp = true;
      this.showInputFromLink = false;
    } else if (mode === 'link') {
      this.showInputFromComp = false;
      this.showInputFromLink = true;
    }
    this.uploadForm.reset();
    this.imageLink = null;
    this.selectedImage = null;
  }
}


