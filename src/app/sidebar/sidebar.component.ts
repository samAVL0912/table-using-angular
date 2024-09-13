// sidebar.component.ts
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterModule],
  template: `
    <mat-nav-list>
      <a mat-list-item routerLink="/table">Table</a> <!-- Existing link -->
      <a mat-list-item routerLink="/navigate">Navigate</a> <!-- Link to NavigateComponent -->
    </mat-nav-list>
  `,
})
export class SidebarComponent {}
