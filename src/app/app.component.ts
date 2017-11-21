import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EletroPage } from '../pages/eletro/eletro';
import { ClimatePage } from '../pages/climate/climate';
import { LightsPage } from '../pages/lights/lights';
import { SafetyPage } from '../pages/safety/safety';
import { ConfigPage } from '../pages/config/config';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages: Array<{title: string, component: any}> = [];
  rootPage:any = HomePage;
  public home: any = {title: 'Home', component: HomePage};

  constructor(platform: Platform, public menuCtrl: MenuController ,statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages = [
      {title: 'Luzes', component: LightsPage},
      {title: 'Eletros', component: EletroPage},
      {title: 'Temperatura', component: ClimatePage},
      {title: 'Segurança', component: SafetyPage},
      {title: 'Configurações', component: ConfigPage}
    ]

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: {title: string, component: any}): void {
    this.rootPage = page.component;
    this.menuCtrl.close();
  }

}
