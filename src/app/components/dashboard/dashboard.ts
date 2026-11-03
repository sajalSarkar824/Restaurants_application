import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  totalTables: number = 10;

  availableTables: number = 6;

  bookedTables: number = 4;

  totalReservations: number = 4;

}