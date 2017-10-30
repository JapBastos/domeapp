import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClimatePage } from './climate';

@NgModule({
  declarations: [
    ClimatePage,
  ],
  imports: [
    IonicPageModule.forChild(ClimatePage),
  ],
})
export class ClimatePageModule {}
