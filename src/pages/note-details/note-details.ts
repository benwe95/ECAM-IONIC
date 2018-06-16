import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteFormPage } from "../note-form/note-form";
import {NoteProvider} from "../../providers/note/note";
import {Note} from "../../app/note";
import {Category} from "../../app/category";

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

  private selectedNote: Note;
  private category: Category;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private noteProvider: NoteProvider) {
    this.selectedNote = navParams.get('selectedNote')
    console.log('selectedNote', typeof this.selectedNote);
    this.category = this.selectedNote.category;
    console.log('category', this.category);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoteDetailsPage');
  }

  editNote(event): void{
    this.navCtrl.push(NoteFormPage, {
      note: this.selectedNote,
      mode: "edit"
    });
  }


  delNote(event): void{
    this.noteProvider.delNote(this.selectedNote.id)
      .subscribe(() => this.navCtrl.pop());
  }



}
