import { Component, OnInit } from '@angular/core';
import {
  NgFor,
  NgIf,
 
} from '@angular/common';
import { RouterLink } from '@angular/router';
//import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-productos',
  imports: [
    NgFor,
    NgIf,
    RouterLink,
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
