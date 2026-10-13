import { Routes } from '@angular/router';
import { Home } from './pages/home/home'
import { MovieDetail } from './pages/movie-detail/movie-detail'

export const routes: Routes = [
	{ path: '', component: Home},
	{ path: 'movies/:id', component: MovieDetail }
];
