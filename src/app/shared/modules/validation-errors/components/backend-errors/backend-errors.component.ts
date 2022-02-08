import {Component, Input, OnInit} from '@angular/core';
import {BackendErrorsInterface} from "../../../../types/BackendErrorsInterface";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'main-method-backend-errors',
  templateUrl: './backend-errors.component.html',
  styleUrls: ['./backend-errors.component.less']
})
export class BackendErrorsComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface | undefined;
  errorMessages: string[] | undefined
  constructor() { }

  ngOnInit(): void {

    if(this.backendErrorsProps) {
      this.errorMessages = Object.keys(this.backendErrorsProps)
        .map((name: string) => {
          console.log(name)
          // @ts-ignore
          const messages = this.backendErrorsProps[name].join(' ');
          return `${name} ${messages}`;
        })
    }
  }
}
