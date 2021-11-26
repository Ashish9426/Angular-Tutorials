import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
export interface Student {
  rollNo: number;
  name: string;
  marks: number;
  standard: string;
}

const data: Student[] = [
  { rollNo: 1, name: 'Ramesh', marks: 78, standard: '10' },
  { rollNo: 2, name: 'Suresh', marks: 56, standard: '12' },
  { rollNo: 3, name: 'Adi', marks: 77, standard: '7' },
  { rollNo: 4, name: 'Rina', marks: 57, standard: '9' },
  { rollNo: 5, name: 'Tapil', marks: 66, standard: '9' },
  { rollNo: 6, name: 'Sugul', marks: 88, standard: '5' },
  { rollNo: 7, name: 'Aftar', marks: 46, standard: '5' },
  { rollNo: 8, name: 'Oxa', marks: 57, standard: '5' },
  { rollNo: 9, name: 'Tam', marks: 76, standard: '5' },
  { rollNo: 10, name: 'Luis', marks: 87, standard: '7' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  addFilterFlag = false;
  selectedCustomColumn;

  displayedColumns = ['rollNo', 'name', 'marks', 'standard'];
  customFilters = [];
  groupByColumns = [];

  dataSource = new MatTableDataSource<Student>();

  constructor() {
    this.dataSource.data = data;
  }

  addFilter(columnName) {
    this.customFilters.push({ column: columnName, value: '' });
    this.selectedCustomColumn = null;
  }

  ifExists(columnName) {
    for (const iterator of this.customFilters) {
      if (iterator.column == columnName) {
        return false;
      }
    }
    return true;
  }

  customSearch() {
    this.dataSource.data = data.filter(row => this.multipleFilterPredicate(row));
    this.dataSource._updateChangeSubscription();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  multipleFilterPredicate(row) {
    for (const iterator of this.customFilters) {
      if (iterator.value != '' && (row[iterator.column] + '').toLocaleLowerCase().indexOf(iterator.value) == -1) {
        return false;
      }
    }
    return true;
  }

  clearCustomFilter() {
    this.customFilters = [];
    this.dataSource.data = data;
    this.dataSource._updateChangeSubscription();
  }

  clearCommonFilter(inp) {
    this.dataSource.filter = undefined;
    inp.value = '';
  }
}

