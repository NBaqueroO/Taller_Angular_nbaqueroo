import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'] // Asegúrate de que este archivo CSS exista
})
export class SerieComponent implements OnInit {
  series: Serie[] = [];
  selectedSerie: Serie | null = null; // Para almacenar la serie seleccionada
  totalSeasons: number = 0; // Para el cálculo de temporadas
  averageSeasons: number = 0; // Para mostrar el promedio

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.serieService.getSeries().subscribe(data => {
      this.series = data;
      this.calculateSeasons();
    });
  }

  calculateSeasons(): void {
    this.totalSeasons = this.series.reduce((total, serie) => total + serie.seasons, 0);
    this.averageSeasons = this.series.length ? Math.round(this.totalSeasons / this.series.length) : 0; // Redondea el promedio
}


  onSelect(serie: Serie): void {
    this.selectedSerie = serie;
  }
}
