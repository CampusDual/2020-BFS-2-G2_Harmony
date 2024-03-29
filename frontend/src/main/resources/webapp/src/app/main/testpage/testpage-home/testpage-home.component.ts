import { Component, OnInit } from '@angular/core';
import { DIRECTORIES } from 'app/app.config';

@Component({
  selector: 'app-testpage-home',
  templateUrl: './testpage-home.component.html',
  styleUrls: ['./testpage-home.component.scss']
})
export class TestpageHomeComponent implements OnInit {
  album: Album;
  imagePath: string;
  nTracks: number;
  cumulativeDuration: string;
  dataSource: song[];
  constructor() { }


  buildImagePath(){
    let imagePath: string; 
    imagePath = String(DIRECTORIES.albums+"/"+this.album.id+"_cover.jpg");
    console.log(imagePath);
    return imagePath;
  }
  ngOnInit() {
    let meteora: Album; 
    

    meteora = { 
      id: 1,
      title: "Meteora",
      artist: "Linkin Park", 
      creationYear: 2003, 
      songList: [
        {track: 1, title: "Foreword", duration: 13},
        {track: 2, title: "Don't Stay", duration: 188},
        {track: 3, title: "Somewhere I Belong", duration: 214},
        {track: 4, title: "Lying from You", duration: 175},
        {track: 5, title: "Hit the Floor", duration: 164},
        {track: 6, title: "Easier to Run", duration: 204},
        {track: 7, title: "Faint", duration: 163},
        {track: 8, title: "Figure.09", duration: 198},
        {track: 9, title: "Breaking the Habit", duration: 197},
        {track: 10, title: "From the Inside", duration: 174},
        {track: 11, title: "Nobody's Listening", duration: 179},
        {track: 12, title: "Session", duration: 144},
        {track: 13, title: "Numb", duration: 186}
      ]
      }
      let hybridTheory = {
        id: 2,
        title: "Hybrid Theory",
        artist: "Linkin Park",
        creationYear: 2000,
        songList: [
        {track: 1, title: "Foreword", duration: 13},
        {track: 2, title: "Don't Stay", duration: 188},
        {track: 3, title: "Somewhere I Belong", duration: 214},
        {track: 4, title: "Lying from You", duration: 175},
        {track: 5, title: "Hit the Floor", duration: 164},
        {track: 6, title: "Easier to Run", duration: 204},
        {track: 7, title: "Faint", duration: 163},
        {track: 8, title: "Figure.09", duration: 198},
        {track: 9, title: "Breaking the Habit", duration: 197},
        {track: 10, title: "From the Inside", duration: 174},
        {track: 11, title: "Nobody's Listening", duration: 179},
        {track: 12, title: "Session", duration: 144},
        {track: 13, title: "Numb", duration: 186}
        
        ]
      }
      
    
      this.album = hybridTheory;
      //Header setters
        this.imagePath = this.buildImagePath();
        this.nTracks = this.album.songList.length;
          //cumulative track length
        let cumulativeDuration: number = 0;
        for(let song of this.album.songList){
          
          cumulativeDuration += song.duration;
          console.log(cumulativeDuration);
        }

        
        this.cumulativeDuration = String(Math.trunc(cumulativeDuration/60));
      
    }
    //Returns track duration in mm:ss format.
    
  }