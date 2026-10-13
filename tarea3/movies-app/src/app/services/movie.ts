import { Injectable, signal } from '@angular/core';
import moviesData from '../../assets/data.json';

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

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesSignal = signal<Movie[]>(moviesData);
  readonly movies = this.moviesSignal.asReadonly();
}
