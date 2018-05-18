import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoteDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note-details',
  templateUrl: 'note-details.html',
})
export class NoteDetailsPage {

  selectedNote: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedNote = navParams.get('note')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoteDetailsPage');
  }

}
