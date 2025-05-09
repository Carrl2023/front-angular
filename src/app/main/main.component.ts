import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ProductosComponent } from '../productos/productos.component';
import { AuthService } from '../services/auth.service';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-main',
  imports: [
    RouterOutlet,
    MatTabsModule,
      MatButtonModule,
      HomeComponent,
      AboutComponent,
      ProductosComponent,
      MatButton,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
