import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  buscar(termino: string) {
    console.log(termino);
    if (termino.length > 0)
      this.loading = true;
    this.spotify.getArtists(termino)
      .subscribe((data:any) => {
        console.log(data);
        this.artists = data;
        this.loading = false;
      });
  }

}
