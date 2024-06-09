import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Ocean } from '../../interfaces/Ocean';
import { OceanService } from '../../services/ocean.service';
import { FormsModule } from '@angular/forms';

interface OceanDesnormalizado {
  regiao: string;
  especieNome: string;
  especieStatus: string;
  temperaturaAgua: number;
  pH: number;
  nivelPoluicao: string;
}

@Component({
  selector: 'app-ocean',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ocean.component.html',
  styleUrls: ['./ocean.component.css'],
})
export class OceanComponent {
  oceans: Ocean[] = [];
  filtroOceans: OceanDesnormalizado[] = [];

  regioes = [
    'Atlântico Norte',
    'Atlântico Sul',
    'Pacífico Norte',
    'Pacífico Sul',
    'Índico',
    'Ártico',
    'Antártico',
  ];
  especiesNomes = [
    'Baleia-azul',
    'Tubarão-branco',
    'Peixe-palhaço',
    'Tartaruga-verde',
    'Coral',
  ];
  especiesStatusConservacoes = [
    'Ameaçada',
    'Vulnerável',
    'Menos preocupante',
    'Criticamente ameaçado',
  ];
  temperaturasAgua = [
    1, 4, 5, 7, 11, 13, 14, 19, 20, 22, 23, 24, 26, 27, 28, 29,
  ];
  pHs = [7.1, 7.3, 7.4, 7.7, 7.8, 8.3];
  niveisPoluicao = ['Baixo', 'Moderado', 'Alto'];

  selecaoRegiao = '';
  selecaoEspecie = '';
  selecaoStatus = '';
  selecaoTemperaturaAgua = 0;
  selecaoPH = 0;
  selecaoNivelPoluicao = '';

  constructor(private oceanService: OceanService) {}

  ngOnInit() {
    this.oceanService.listar().subscribe((data: Ocean[]) => {
      this.oceans = data;
      this.separarEspeciePorLinha();
      this.filtrandoDinamicamente();
    });
  }

  separarEspeciePorLinha() {
    this.filtroOceans = this.oceans.flatMap((ocean) =>
      ocean.especies.map((especie) => ({
        regiao: ocean.regiao,
        especieNome: especie.nome || '',
        especieStatus: especie.status || '',
        temperaturaAgua: ocean.temperaturaAgua || 0,
        pH: ocean.pH || 0,
        nivelPoluicao: ocean.nivelPoluicao || '',
      }))
    );
  }

  filtrandoDinamicamente() {
    this.filtroOceans = this.oceans
      .flatMap((ocean) =>
        ocean.especies
          .filter(
            (especie) =>
              (!this.selecaoEspecie || especie.nome === this.selecaoEspecie) &&
              (!this.selecaoStatus || especie.status === this.selecaoStatus)
          )
          .map((especie) => ({
            regiao: ocean.regiao,
            especieNome: especie.nome || '',
            especieStatus: especie.status || '',
            temperaturaAgua: ocean.temperaturaAgua || 0,
            pH: ocean.pH || 0,
            nivelPoluicao: ocean.nivelPoluicao || '',
          }))
      )
      .filter(
        (ocean) =>
          (!this.selecaoRegiao || ocean.regiao === this.selecaoRegiao) &&
          (!this.selecaoTemperaturaAgua ||
            ocean.temperaturaAgua === this.selecaoTemperaturaAgua) &&
          (!this.selecaoPH || ocean.pH === this.selecaoPH) &&
          (!this.selecaoNivelPoluicao ||
            ocean.nivelPoluicao === this.selecaoNivelPoluicao)
      );
  }
}
