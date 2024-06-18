import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ConvertidorComponent } from './components/convertidor/convertidor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductosComponent, ConvertidorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp5-GarciaMateoValentin-backend';
}
