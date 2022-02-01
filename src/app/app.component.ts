import { Component, OnInit } from '@angular/core';
import { appTableSettings } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'custom-table';
  tableSettings = appTableSettings;

  users!: any[];

  ngOnInit(): void {
    console.log(this.tableSettings);

    this.users = [
      {
        id: 1,
        name: 'Tope Ojewale',
        age: 25,
        location: 'Ikeja',
        state: 'Lagos',
      },
      {
        id: 2,
        name: 'Ope Ojewale',
        age: 27,
        location: 'Lekki',
        state: 'Ondo',
      },
    ];
  }
}
