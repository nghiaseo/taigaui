import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taigaui';
  testValue = new FormControl()
  searchValue = new FormControl()
  items = [
    'Luke Skywalker Luke Skywalker Luke Skywalker',
    'Leia Organa Solo',
    'Darth Vader',
    'Han Solo',
    'Obi-Wan Kenobi',
    'Yoda',
  ];
  ngOnInit() {
    this.searchValue.valueChanges.subscribe(e => console.log(e))
  }
}
