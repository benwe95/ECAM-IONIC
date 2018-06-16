import { Component } from '@angular/core';
import {Config, IonicPage, NavController, NavParams} from 'ionic-angular';

import { CategoryProvider } from "../../providers/category/category";
import {CategoryFormPage} from "../category-form/category-form";
import {Category} from "../../app/category";

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  categories: Array<Category> = new Array<Category>();
  errorMessage: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private categoryProvider: CategoryProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
    this.getCategories()

  }

  ionViewWillEnter() {
    this.getCategories()
  }

  /*getCategories(): void {
    this.categoryProvider.getCategories()
      .subscribe(
        categories => this.categories = categories,
        () => this.sortCategories(),
        );
  }*/

  getCategories(): void {
    this.categoryProvider.getCategories()
      .subscribe(categories => this.categories = this.sortCategories(categories));
  }

  addCategory(): void {
    this.navCtrl.push(CategoryFormPage, {
      selectedCategory: new Category(),
      mode: "add"
    });
  }

  delCategory(event, id: number): void{
    this.categoryProvider.delCategory(id)
      .subscribe(()=>this.ionViewWillEnter())
  }

  editCategory(event, selectedCategory: Category): void{
    this.navCtrl.push(CategoryFormPage, {
      selectedCategory: selectedCategory,
      mode: "edit"
    })
  }

  /* Sort the categories by their wording */
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
