import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Ocean } from '../../interfaces/Ocean';
import { OceanService } from '../../services/ocean.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-ocean',
  standalone: true,
  imports: [CommonModule, AppComponent],
  templateUrl: './ocean.component.html',
  styleUrl: './ocean.component.css',
})
export class OceanComponent {
  oceans: Ocean[] = [];

  constructor(private OceanService: OceanService) {}

  listar(): void {
    this.OceanService.listar().subscribe(
      (listOcean) => (this.oceans = listOcean)
    );
  }

  ngOnInit(): void {
    this.listar();
  }
}
