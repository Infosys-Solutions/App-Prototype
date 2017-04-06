import { NgModule, ErrorHandler,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MusicPagePage} from '../pages/music-page/music-page';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Multimedia} from '../providers/multimedia';
import { IonicAudioModule, AudioProvider, WebAudioProvider, audioProviderFactory } from 'ionic-audio';

export function myCustomAudioProviderFactory() {
  return new WebAudioProvider();
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MusicPagePage
  ],
  imports: [
   IonicModule.forRoot(MyApp),
   IonicAudioModule.forRoot({ provide: AudioProvider, useFactory: audioProviderFactory }) 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MusicPagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Multimedia,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
