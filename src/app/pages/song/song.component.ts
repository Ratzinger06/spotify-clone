import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { SongDataService } from 'src/app/services/song-data.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  public songData!: any;
  constructor(
    private sd: SongDataService, 
    private route: Router,
    private activatedRoute: ActivatedRoute
  ){}
  ngOnInit(): void {
    
    this.activatedRoute.params
      .pipe(map((d) => window.history.state))
      .subscribe((data) => (this.songData = data));
    if(this.songData?.link === null || this.songData?.link === undefined || this.songData?.link === ''){
      this.route.navigate(['/']);
      window.alert("No Song Available")
    }
    // this.sd.songData.subscribe((data) => {
    //   this.songData = data;
    //   console.log(data)
    // });
  }


}
