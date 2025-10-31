import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: any;

  movies = [
    { id: 1, titulo: 'Inception', anio: 2010, director: 'Christopher Nolan', genero: 'Ciencia Ficción' },
    { id: 2, titulo: 'Titanic', anio: 1997, director: 'James Cameron', genero: 'Romance' },
    { id: 3, titulo: 'Avengers: Endgame', anio: 2019, director: 'Russo Brothers', genero: 'Acción' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movies.find(m => m.id === id) || null;
  }
}
