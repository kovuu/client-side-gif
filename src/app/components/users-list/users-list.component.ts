import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ServerApiService} from '../../server-api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any[];

  constructor(private service: ServerApiService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(r => this.users = r);

  }

  getUsers(): void {
  }

}
