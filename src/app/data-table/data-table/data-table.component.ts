import { Component, Input, OnInit } from '@angular/core';
import { ColumnSetting } from './table-models';

@Component({
  selector: 'custom-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  @Input() title!: string; // Table Title
  @Input() records!: any[]; // Table Data

  @Input() settings?: ColumnSetting[]; // Table Configuration Settings
  columnMaps!: ColumnSetting[]; // Placeholder for storing table configuraion settings

  constructor() {}

  ngOnInit(): void {
    if (this.settings) {
      // If settings are provided

      this.columnMaps = this.settings;
    } else {
      // If settings are not provided, format headers

      this.columnMaps = Object.keys(this.records[0]).map((key) => {
        return {
          primaryKey: key,
          header:
            key.slice(0, 1).toUpperCase() + key.replace(/_/g, ' ').slice(1),
          format: 0,
        };
      });
    }
  }
}
