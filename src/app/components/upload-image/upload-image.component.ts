import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ServerApiService} from '../../server-api.service';
import {ImageService} from '../../image.service';

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

  constructor(private formBuilder: FormBuilder, private apiService: ServerApiService, private imageService: ImageService) {
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
    this.imageService.getImage(this.imageLink).subscribe(res => {
      this.selectedImage = this.blobToFile(res, 'image');
    });
  }

  uploadImage(): void {

    let image;
    if (this.selectedImage) {
      image = this.selectedImage;
    } else {
      image = this.imageLink;
    }

    this.apiService.uploadImage(image).subscribe(r => {
      this.status = true;
      this.message = r.message;
    }, error => {
      this.status = false;
      this.message = error.reason.message;
    });
    this.uploadForm.reset();
    this.imageLink = '';
    this.selectedImage = null;
  }

}
