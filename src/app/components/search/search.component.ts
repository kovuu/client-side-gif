import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ServerApiService} from '../../server-api.service';
import {HelperService} from "../../helper.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm;

  @Output()
  tags = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder, private service: ServerApiService, private helperService: HelperService) {
    this.searchForm = this.formBuilder.group({
      tags: ['']
    });
  }

  ngOnInit(): void {
  }

  searchByTags(data): void {
    this.tags.emit(data.tags);
    // this.helperService.filteredByTagsImages$.next();
  }

}
