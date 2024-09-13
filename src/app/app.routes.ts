// app.routes.ts
import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { NavigateComponent } from './navigate/navigate.component'; // Import the new component

export const routes: Routes = [
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: 'table', component: TableComponent },
  { path: 'navigate', component: NavigateComponent }, // Add route for NavigateComponent
];
