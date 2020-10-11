import { Component, OnInit } from '@angular/core';
import {mergeMap} from "rxjs/operators";
import {ServerApiService} from "../../server-api.service";
import {HelperService} from "../../helper.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  allImages;

  constructor(private service: ServerApiService, private helperService: HelperService) { }

  ngOnInit(): void {
    this.service.getAllImages().subscribe(r => {
      console.log(r);
      this.allImages = r;
    });
    this.helperService.allImages$.pipe(
      mergeMap(r => this.service.getAllImages())
    ).subscribe(res => this.allImages = res);

    this.helperService.filteredByTagsImages$.pipe(
      mergeMap(r => this.service.getAllImagesByTag())
    ).subscribe(res => this.allImages = res);
  }

}
