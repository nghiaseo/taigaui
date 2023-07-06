import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DayRange } from './v16/interfaces/DayRange';
import { DateTime } from './v16/interfaces/DateTime';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'taigaui';
  search
  input = new FormControl(null, [Validators.required, Validators.maxLength(5)])
  status = new FormControl()
  dayRange = new FormControl({ from: new Date(), to: new Date() })
  article = new FormControl()

  items = [] //[{ id: 0, text: 'Luke Skywalker' },
  // { id: 1, text: 'Leia Organa Solo' },
  // { id: 2, text: 'Darth Vader' },
  // { id: 3, text: 'Han Solo' },
  // { id: 4, text: 'Obi-Wan Kenobi' },
  // { id: 5, text: 'Yoda' },
  // ];
  t: Date
  ngOnInit() {

  }

  submit() {
    console.log(this.input.errors)
  }
}
