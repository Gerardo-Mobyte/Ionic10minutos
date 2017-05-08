import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Donde } from './donde';

@NgModule({
  declarations: [
    Donde,
  ],
  imports: [
    IonicPageModule.forChild(Donde),
  ],
  exports: [
    Donde
  ]
})
export class DondeModule {}
