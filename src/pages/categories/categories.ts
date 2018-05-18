import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CategoryProvider } from "../../providers/category/category";

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

  categories: any;
  errorMessage: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private categoryProvider: CategoryProvider) {
    this.getCategories()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  getCategories(): void {
    this.categoryProvider.getCategories()
      .subscribe(
        categories => this.categories = categories,
        error => this.errorMessage = <any>error);
  }
}
