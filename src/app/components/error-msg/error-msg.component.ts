import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})

export class ErrorMsgComponent implements OnInit {

  @Input()
    message: string;

  @Input()
    status: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
