import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServerApiService} from '../server-api.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ServerApiService) { }

  ngOnInit(): void {
    this.service.getUser(this.route.snapshot.params.id).subscribe(res => console.log(res));
  }

}
