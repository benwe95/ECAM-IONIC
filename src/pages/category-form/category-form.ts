import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup} from "@angular/forms";
import {Category} from "../../app/category";
import {CategoryProvider} from "../../providers/category/category";


/**
 * Generated class for the CategoryFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category-form',
  templateUrl: 'category-form.html',
})
export class CategoryFormPage {

  private selectedCategory;
  private categoryForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private categoryProvider: CategoryProvider) {
    this.selectedCategory = this.navParams.get('selectedCategory');
    this.categoryForm = this.formBuilder.group({
      wording: [this.selectedCategory.wording, Validators.required]
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryFormPage');
  }

  saveCategory():void{
    // Check if the title is not a blank
    if (!this.categoryForm.controls['wording'].value.trim()) { return; }

    this.selectedCategory.wording = this.categoryForm.controls['wording'].value.trim();

    // Then look if the mode is EDIT or ADD
    if (this.navParams.get('mode')=="edit") {
      this.categoryProvider.updateCategory(this.selectedCategory, this.selectedCategory.id)
        .subscribe(() => this.navCtrl.pop());
    } else {
      this.categoryProvider.addCategory(this.selectedCategory)
        .subscribe(() => this.navCtrl.pop());
    }
  }

  cancel(): void {
    this.navCtrl.pop();
  }
}
