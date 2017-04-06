import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Multimedia provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

export class audioFile{
   public src:string
   public artist:string
   public title:string
   public art:string
   public  preload:string

 
}

@Injectable()
export class Multimedia {

  tracks
  audios:Array<audioFile>=[]

  constructor(public http: Http) {
      this.loadMusic();
  }
  loadMusic()
  {
      this.http.get('http://soundpip.com/api/tracks/').map(res => res.json()).subscribe(data => {
        this.tracks = data.results;
        this.loadData();
    });
  
  }
  loadData()
  {
    
     for(let i=0;i<this.tracks.length;i++) 
      {
        
      
          console.log(this.tracks[i].stream_url);
          let obj =new audioFile();
          obj.art=this.tracks[i].image;
          obj.artist=this.tracks[i].artist;
          obj.preload="matadata";
          obj.src=this.tracks[i].stream_url;
          obj.title=this.tracks[i].title;
          this.audios.push(obj);          

        
      }
  }
  returnSongs()
  {
   return new Promise((resolve)=>{resolve(this.audios)})
  }

}
