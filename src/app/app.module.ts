import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from "@angular/common/http";

import { NotesPage } from "../pages/notes/notes";
import { NoteProvider } from '../providers/note/note';
import { NoteDetailsPage } from "../pages/note-details/note-details";
import { CategoriesPage } from "../pages/categories/categories";
import { CategoryProvider } from '../providers/category/category';
import {NoteFormPage} from "../pages/note-form/note-form";
import {CategoryFormPage} from "../pages/category-form/category-form";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    NotesPage,
    NoteDetailsPage,
    NoteFormPage,
    CategoriesPage,
    CategoryFormPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    NotesPage,
    NoteDetailsPage,
    NoteFormPage,
    CategoriesPage,
    CategoryFormPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteProvider,
    CategoryProvider
  ]
})
export class AppModule {}
