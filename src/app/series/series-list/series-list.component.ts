import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series :Array<Serie>=[];

  constructor(private servicioSeries:SeriesService) { }


  getSeries(): void {
    this.servicioSeries.getSeries().subscribe((series) => {this.series = series
    });
}
  ngOnInit() {
    this.getSeries();
  }
  public darPromedioTemporadas(seriess: Serie[]){
    let suma=0
    for(let i=0;i<seriess.length;i++){
        suma+=seriess[i].seasons;
    }
    return (suma/seriess.length)
}

}
