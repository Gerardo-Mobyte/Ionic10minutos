import { Talk } from './../talk/talk';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataProvider } from './../../providers/data-provider';
/**
 * Generated class for the Agenda page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class Agenda {

  public days;
  public currentDay: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Agenda');

    this.days = this.dataProvider.getDays();    
    this.currentDay = 0;
  }

  public viewTalk(talk) {
    if (talk.contents && talk.contents.type === 'TALK') {
      this.navCtrl.push(Talk, {
        talk: talk
      });
    }
  }
}
