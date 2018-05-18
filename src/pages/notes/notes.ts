import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Note } from "../../app/note";
import { NoteProvider } from "../../providers/note/note";
import { NoteDetailsPage } from "../note-details/note-details";

/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  notes: any;
  errorMessage: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private noteProvider: NoteProvider) {
    this.getNotes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
  }

  getNotes(): void {
    this.noteProvider.getNotes()
      .subscribe(
        notes => this.notes = notes,
        error => this.errorMessage = <any>error);
  }

  // When clicking on a Note it will launch a new page which displays details about it
  noteTapped(event, note) {
    this.navCtrl.push(NoteDetailsPage, {
      note: note
    });
  }

}
