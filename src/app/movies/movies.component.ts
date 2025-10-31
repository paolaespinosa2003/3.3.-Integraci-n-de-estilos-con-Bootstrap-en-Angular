import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies = [
    { id: 1, titulo: 'Inception', anio: 2010, director: 'Christopher Nolan', genero: 'Ciencia Ficción' },
    { id: 2, titulo: 'Titanic', anio: 1997, director: 'James Cameron', genero: 'Romance' },
    { id: 3, titulo: 'Avengers: Endgame', anio: 2019, director: 'Russo Brothers', genero: 'Acción' }
  ];
}
