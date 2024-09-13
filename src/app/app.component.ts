import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
// import { NavbarComponent } from './navbar.component';
// import { SidebarComponent } from './sidebar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    NavbarComponent,
    SidebarComponent,
    RouterOutlet,
  ],
  template: `
    <app-navbar (sidenavToggle)="sidenav.toggle()"></app-navbar>

    <mat-sidenav-container>
      <mat-sidenav #sidenav mode="side" opened>
        <app-sidebar></app-sidebar>
      </mat-sidenav>

      <mat-sidenav-content>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class AppComponent {}
