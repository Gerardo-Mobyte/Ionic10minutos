import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Speaker } from './speaker';

@NgModule({
  declarations: [
    Speaker,
  ],
  imports: [
    IonicPageModule.forChild(Speaker),
  ],
  exports: [
    Speaker
  ]
})
export class SpeakerModule {}
