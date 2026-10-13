import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-movie-detail',
  imports: [RouterLink],
  templateUrl: './movie-detail.html'
})
export class MovieDetail {
  private movieService = inject(MovieService);

  // Automatically populated from :id route parameter
  id = input.required<string>();

  // Find the matching movie reactively
  movie = computed(() => {
    const movieId = Number(this.id());
    return this.movieService.movies().find(m => m.id === movieId);
  });
}