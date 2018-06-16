import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Note } from "../../app/note";
import { NoteProvider } from "../../providers/note/note";
import { NoteDetailsPage } from "../note-details/note-details";
import { NoteFormPage } from "../note-form/note-form";
import {Category} from "../../app/category";

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

  private notes:  Array<Note> = new Array<Note>();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private noteProvider: NoteProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
    this.getNotes();
  }

  /* When the page is about to enter and become the active page it reloads the list of notes for changes */
  ionViewWillEnter() {
    this.getNotes();
  }

  getNotes(): void {
    this.noteProvider.getNotes()
      .subscribe(
        notes => this.notes = this.sortNotes(notes));

    //console.log(typeof this.notes)
    /*for (let note of this.notes){
      //note.updateDate = new Date(note);
    }*/
  }


  addNote(): void{
    this.navCtrl.push(NoteFormPage, {
      note: new Note(),
      mode: "add"
    });
  }


  editNote(event, selectedNote: Note): void{
    this.navCtrl.push(NoteFormPage, {
      note: selectedNote,
      mode: "edit"
    });
  }


  delNote(event, id: number): void{
    this.noteProvider.delNote(id)
      .subscribe(()=>this.ionViewWillEnter());
  }


  // When clicking on a Note it will launch a new page which displays details about it
  noteTapped(event, note): void {
    this.navCtrl.push(NoteDetailsPage, {
      selectedNote: note
    });
  }

  sortNotes(notes: Note[]): Note[]{
    console.log('SortNotes', notes);
    /* Retrieve the string date and create a Date variable */
    for (let note of notes){
      note.updateDate = new Date(note.date);
    }
    return notes.sort((note1, note2) => {
      if (note1.date > note2.date) {
        return -1;
      }
      if (note1.date < note2.date) {
        return 1;
      }
      return 0;
    });
  }

}
