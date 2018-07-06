import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {

  title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = "Note";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
  }

}
