import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AudioProvider } from 'ionic-audio';
import {Multimedia} from '../../providers/multimedia';
/*
  Generated class for the MusicPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-music-page',
  templateUrl: 'music-page.html'
})
export class MusicPagePage {
   myTracks: any[];
  singleTrack: any;
  allTracks: any[];
  selectedTrack: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public media:Multimedia,private audioProvider: AudioProvider) 
  {
      media.returnSongs().then((data)=>{
        this.myTracks=<any>data;
      })
     this.singleTrack = {
      src: 'https://archive.org/download/swrembel2010-03-07.tlm170.flac16/swrembel2010-03-07s1t05.mp3',
      artist: 'Stephane Wrembel',
      title: 'Stephane Wrembel Live',
      art: 'assets/img/Stephane.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPagePage');
  }

  ngAfterContentInit() {     
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this.audioProvider.tracks; 
  }
  playSelectedTrack() {
    // use AudioProvider to control selected track 
    console.log(this.selectedTrack);
    this.audioProvider.play(this.selectedTrack);
  }
  
  pauseSelectedTrack() {
     // use AudioProvider to control selected track 
     this.audioProvider.pause(this.selectedTrack);
  }
         
  onTrackFinished(track: any,id) {
    this.audioProvider.play(id+1);
    console.log('Track finished', track)
  }
}
