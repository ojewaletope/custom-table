import { NgModule } from '@angular/core';
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  PercentPipe,
} from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { FormatCellPipe } from './format-cell.pipe';

@NgModule({
  declarations: [DataTableComponent, FormatCellPipe],
  imports: [CommonModule],
  exports: [DataTableComponent],
  providers: [CurrencyPipe, DatePipe, PercentPipe],
})
export class DataTableModule {}
