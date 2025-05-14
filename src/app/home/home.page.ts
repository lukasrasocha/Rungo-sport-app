import {Component, inject} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {SportService} from "../services/sport.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class HomePage {
  private sportService = inject(SportService);
  constructor() {
    this.loadMovie();
  }

  loadMovies() {
    this.movieService.getTopRatedMovies().subscribe(movies) => {
      console.log(movies);
    });
  }
}

