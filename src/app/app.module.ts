import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
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
import { ConfigPage } from '../pages/config/config';
import { NodesProvider } from '../providers/nodes/nodes';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EletroPage,
    ClimatePage,
    LightsPage,
    SafetyPage,
    ConfigPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EletroPage,
    ClimatePage,
    LightsPage,
    SafetyPage,
    ConfigPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NodesProvider
  ]
})
export class AppModule {}
