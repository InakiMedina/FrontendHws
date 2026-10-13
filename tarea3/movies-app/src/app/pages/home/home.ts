import { Component, inject, signal, computed } from '@angular/core';
import { MovieService } from '../../services/movie';


export interface Movie {
  id: number;
  titulo: string;
  director: string;
  productor: string;
  genero: string;
  ano: number;
  descripcion: string;
  imagen: string;
}

type MovieKey = keyof Movie;

const typesUsedInQuery: MovieKey[] = [
  'titulo',
  'director',
  'productor',
  'genero',
  'ano'
]

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private movieService = inject(MovieService);
  movies = this.movieService.movies;

  searchTerm = signal('');

  filteredMovies = computed(() => {
    const query = this.searchTerm().trim().toLowerCase();
    if (!query) return this.movies();

    return this.movies().filter(movie  =>
      typesUsedInQuery.some(key =>
        String(movie[key] ?? '')
          .toLowerCase()
          .includes(query)
      )
    );
  });
}
