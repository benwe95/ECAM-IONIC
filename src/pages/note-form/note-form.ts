import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Category } from "../../app/category";
import { Note } from "../../app/note";
import { NoteProvider } from "../../providers/note/note";
import { CategoryProvider } from "../../providers/category/category";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

/**
 * Generated class for the NoteFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note-form',
  templateUrl: 'note-form.html',
})
export class NoteFormPage {

  private selectedNote: Note;
  private categories: Category[];
  private noteForm: FormGroup;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private noteProvider: NoteProvider,
              private categoryProvider: CategoryProvider,
              private formBuilder: FormBuilder) {

    this.selectedNote = navParams.get('note')
    this.noteForm = this.formBuilder.group({
      title: [this.selectedNote.title, Validators.required],
      content:[this.selectedNote.content, Validators.required],
      category:[this.selectedNote.category, Validators.required],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoteFormPage');
    this.getCategories();
  }


  getCategories(): void {
    this.categoryProvider.getCategories()
      .subscribe(
        categories => this.categories = this.sortCategories(categories)
      );
  }


  saveNote(): void {
    // Check if the title is not a blank
    if (!this.noteForm.controls['title'].value.trim()) { return; }

    this.selectedNote.title = this.noteForm.controls['title'].value;
    this.selectedNote.content = this.noteForm.controls['content'].value;
    this.selectedNote.category = this.noteForm.controls['category'].value;

    // Then look if the mode is EDIT or ADD
    if (this.navParams.get('mode')=="edit") {
      this.noteProvider.updateNote(this.selectedNote, this.selectedNote.id)
        .subscribe(() => this.navCtrl.pop());
    } else {
      this.noteProvider.addNote(this.selectedNote)
        .subscribe(() => this.navCtrl.pop());
    }
  }


  cancel(): void{
    this.navCtrl.pop();
  }

  sortCategories(cat:Category[]): Category[]{
    return cat.sort((cat1, cat2) => {
      if (cat1.wording > cat2.wording) {
        return 1;
      }
      if (cat1.wording < cat2.wording) {
        return -1;
      }
      return 0;
    });
  }
}
