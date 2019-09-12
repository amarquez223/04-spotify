import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  toptracks: any[] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute,
            private spotify: SpotifyService) {

    this.loading = true;

    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    })

  }

  getArtist(id: string) {

    this.loading = true;

    this.spotify.getArtist(id)
      .subscribe(artista => {
        console.log(artista);
        this.artist = artista;
        this.loading = false;
      });

  }

  getTopTracks(id: string) {
    
    this.spotify.getTopTracks(id)
      .subscribe(toptracks => {
        console.log(toptracks);
        this.toptracks = toptracks;
      });
  }

}
