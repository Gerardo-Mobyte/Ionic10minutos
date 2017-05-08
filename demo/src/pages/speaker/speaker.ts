import { Talk } from './../talk/talk';
import { DataProvider } from './../../providers/data-provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Speaker page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-speaker',
  templateUrl: 'speaker.html',
})
export class Speaker {

  public speaker;
  public talks;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Speaker');

    this.speaker = this.navParams.get('speaker');
    this.talks = this.dataProvider.getTalksByAuthor(this.speaker.id);
  }

  public viewTalk(talk) {
    console.log(talk);
    this.navCtrl.push(Talk, {
      talk: talk
    });
  }

}
