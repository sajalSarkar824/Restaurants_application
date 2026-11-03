import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ReservationData {
  id: number;
  name: string;
  guests: number;
  date: string;
  time: string;
}

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css'
})
export class Reservation {

  customerName: string = '';
  guests: number = 1;
  date: string = '';
  time: string = '';

  reservations: ReservationData[] = [];

  addReservation() {

    if (
      !this.customerName.trim() ||
      this.guests < 1 ||
      !this.date ||
      !this.time
    ) {
      alert('Please fill all fields');
      return;
    }

    const newReservation: ReservationData = {
      id: Date.now(),
      name: this.customerName,
      guests: this.guests,
      date: this.date,
      time: this.time
    };

    this.reservations = [
      ...this.reservations,
      newReservation
    ];

    this.customerName = '';
    this.guests = 1;
    this.date = '';
    this.time = '';
  }

  deleteReservation(id: number) {

    this.reservations = this.reservations.filter(
      item => item.id !== id
    );

  }

}