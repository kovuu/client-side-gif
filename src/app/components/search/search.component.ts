import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ServerApiService} from "../../server-api.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm;

  constructor(private formBuilder: FormBuilder, private service: ServerApiService) {
    this.searchForm = this.formBuilder.group({
      tags: ['']
    });
  }

  ngOnInit(): void {
  }

  searchByTags(data): void {
  }

}
