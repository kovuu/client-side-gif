import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ServerApiService} from '../../server-api.service';
import {TestServiceService} from '../../test-service.service';

@Component({
  selector: 'app-images-block',
  templateUrl: './images-block.component.html',
  styleUrls: ['./images-block.component.css']
})
export class ImagesBlockComponent implements OnInit {
  allImages;

  constructor(private service: ServerApiService, private testService: TestServiceService) { }

  ngOnInit(): void {
    this.service.getAllImages().subscribe(r => this.allImages = r);
    this.testService.subject$.subscribe((data) => {
      this.service.getAllImages().subscribe(r => {
        this.allImages = r;
      });
    });
  }


}
