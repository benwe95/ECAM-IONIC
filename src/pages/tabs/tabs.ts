import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { NotesPage } from "../notes/notes";
import { CategoriesPage } from "../categories/categories";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NotesPage;
  tab2Root = CategoriesPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
