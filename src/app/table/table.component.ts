// src/app/table/table.component.ts

import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AddEditDialogComponent } from '../add-edit-dialog/add-edit-dialog.component'; // Ensure correct path

export interface UserData {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatDialogModule, MatCardModule],
  template: `
    <mat-card>
      <mat-card-title>
        Crud App
        <button mat-raised-button color="primary" (click)="addUser()">Add User</button>
      </mat-card-title>
      <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef> ID </th>
          <td mat-cell *matCellDef="let element"> {{element.id}} </td>
        </ng-container>

        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef> Name </th>
          <td mat-cell *matCellDef="let element"> {{element.name}} </td>
        </ng-container>

        <ng-container matColumnDef="age">
          <th mat-header-cell *matHeaderCellDef> Age </th>
          <td mat-cell *matCellDef="let element"> {{element.age}} </td>
        </ng-container>

        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef> Actions </th>
          <td mat-cell *matCellDef="let element">
            <button mat-icon-button color="accent" (click)="editUser(element)">
              <mat-icon>edit</mat-icon>
            </button>
            <button mat-icon-button color="warn" (click)="deleteUser(element.id)">
              <mat-icon>delete</mat-icon>
            </button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </mat-card>
  `,
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'name', 'age', 'actions'];
  dataSource: UserData[] = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 }
  ];

  constructor(public dialog: MatDialog) {}

  addUser(): void {
    const dialogRef = this.dialog.open(AddEditDialogComponent, {
      width: '300px',
      data: { name: '', age: null }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newUser = { id: this.dataSource.length + 1, ...result };
        this.dataSource = [...this.dataSource, newUser];
      }
    });
  }

  editUser(user: UserData): void {
    const dialogRef = this.dialog.open(AddEditDialogComponent, {
      width: '300px',
      data: { ...user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource = this.dataSource.map(u =>
          u.id === user.id ? { ...u, ...result } : u
        );
      }
    });
  }

  deleteUser(userId: number): void {
    this.dataSource = this.dataSource.filter(user => user.id !== userId);
  }
}
