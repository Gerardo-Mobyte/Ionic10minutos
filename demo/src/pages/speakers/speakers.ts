import { DataProvider } from './../../providers/data-provider';
import { Component } from '@angular/core';
import { Speaker } from './../speaker/speaker';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Speakers page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class Speakers {

  public speakers;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Speakers');

    this.speakers = this.dataProvider.getSpeakers();
  }

  public viewSpeaker(speaker) {
    this.navCtrl.push(Speaker, {
      speaker: speaker
    });
  }

}
