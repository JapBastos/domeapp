import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EletroPage } from '../eletro/eletro';
import { ClimatePage } from '../climate/climate';
import { LightsPage } from '../lights/lights';
import { SafetyPage } from '../safety/safety';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages: Array<{title: string, component: any}>
  constructor(public navCtrl: NavController) {
    this.pages = [
      {title: 'Luzes', component: LightsPage},
      {title: 'Eletros', component: EletroPage},
      {title: 'Temperatura', component: ClimatePage},
      {title: 'Segurança', component: SafetyPage}
    ]
  }

  openP(page:{title: string, component: any}):void{
    this.navCtrl.push(page.component);
  }

}
