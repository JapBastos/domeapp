import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EletroPage } from '../pages/eletro/eletro';
import { ClimatePage } from '../pages/climate/climate';
import { LightsPage } from '../pages/lights/lights';
import { SafetyPage } from '../pages/safety/safety';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EletroPage,
    ClimatePage,
    LightsPage,
    SafetyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EletroPage,
    ClimatePage,
    LightsPage,
    SafetyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
