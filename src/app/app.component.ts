import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OceanComponent } from './components/ocean/ocean.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OceanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
