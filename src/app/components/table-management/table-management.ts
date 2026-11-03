import { Component } from '@angular/core';

interface Table {
  id: number;
  capacity: number;
  status: string;
}

@Component({
  selector: 'app-table-management',
  standalone: true,
  imports: [],
  templateUrl: './table-management.html',
  styleUrl: './table-management.css'
})
export class TableManagement {

  tables: Table[] = [
    { id: 1, capacity: 2, status: 'Available' },
    { id: 2, capacity: 4, status: 'Booked' },
    { id: 3, capacity: 2, status: 'Available' },
    { id: 4, capacity: 6, status: 'Booked' },
    { id: 5, capacity: 4, status: 'Available' },
    { id: 6, capacity: 2, status: 'Available' },
    { id: 7, capacity: 6, status: 'Available' },
    { id: 8, capacity: 4, status: 'Booked' }
  ];

  get availableTables(): number {
    return this.tables.filter(
      table => table.status === 'Available'
    ).length;
  }

  get bookedTables(): number {
    return this.tables.filter(
      table => table.status === 'Booked'
    ).length;
  }

  changeStatus(id: number): void {

    this.tables = this.tables.map(table => {

      if (table.id === id) {
        return {
          ...table,
          status: table.status === 'Available'
            ? 'Booked'
            : 'Available'
        };
      }

      return table;

    });

  }

}