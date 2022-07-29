import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IShow } from 'src/app/interfaces/show.interface';
import { Show } from '../../models/show.model';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	public shows?: Array<Show>;

	constructor(private readonly http: HttpClient) {
		console.log('Created service singleton');
	}

	public fetchAllShows(): Observable<Show[]> {
		return this.http.get<{ shows: IShow[] }>('https://tv-shows.infinum.academy/shows').pipe(
			map((response) => {
				return response.shows.map((show) => new Show(show));
			}),
		);
	}

	public fetchTopRated(): Observable<Show[]> {
		return this.http.get<{ shows: IShow[] }>('https://tv-shows.infinum.academy/shows/top_rated').pipe(
			map((response) => {
				return response.shows.map((show) => new Show(show));
			}),
		);
	}

	public fetchById(id: string): Observable<Show | undefined> {
		return this.http.get<{ show: IShow }>('https://tv-shows.infinum.academy/shows/' + id).pipe(
			map((response) => {
				return new Show(response.show);
			}),
		);
	}

	// public addNewShow(show: Show): void {
	// 	if (this.shows.map((show) => show.id).find((id) => id == show.id)) {
	// 		throw new Error(`Cannot add existing uuid of ${show.id}`);
	// 	}
	// 	this.shows.push(show);
	// }
}
