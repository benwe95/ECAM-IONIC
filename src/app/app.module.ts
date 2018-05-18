import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NotesPage } from "../pages/notes/notes";
import { CategoriesPage } from "../pages/categories/categories";
import { NoteProvider } from '../providers/note/note';

import { HttpClientModule } from "@angular/common/http";
import {NoteDetailsPage} from "../pages/note-details/note-details";
import { CategoryProvider } from '../providers/category/category';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    NotesPage,
    NoteDetailsPage,
    CategoriesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    NotesPage,
    NoteDetailsPage,
    CategoriesPage
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
