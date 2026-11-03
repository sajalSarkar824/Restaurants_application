import { Routes } from '@angular/router';

import { Dashboard } from './components/dashboard/dashboard';
import { Reservation } from './components/reservation/reservation';
import { TableManagement } from './components/table-management/table-management';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'reservation', component: Reservation },
  { path: 'tables', component: TableManagement },
  { path: '**', redirectTo: '' }
];