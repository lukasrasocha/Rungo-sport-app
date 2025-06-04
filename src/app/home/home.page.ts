import {Component, inject} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/angular/standalone';
import {MovieService} from "../services/movie.service";
import {InfiniteScrollCustomEvent} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonContent, IonTitle]
})
export class HomePage {
  private movieService = inject(MovieService);
  private currentPage = 1;
  private error = null;
  constructor() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getTopRatedMovies('872585').subscribe(movies => {
      console.log(movies);
    });
  }

  loadMore(event: InfiniteScrollCustomEvent) {

  }
}

