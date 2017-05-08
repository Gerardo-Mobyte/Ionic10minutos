import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { Info } from './../pages/info/info';
import { Donde } from './../pages/donde/donde';
import { Speakers } from './../pages/speakers/speakers';
import { Speaker } from './../pages/speaker/speaker';
import { Agenda } from './../pages/agenda/agenda';
import { Talk } from './../pages/talk/talk';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DataProvider } from './../providers/data-provider';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    Agenda,
    Speakers,
    Donde,
    Info,
    Speaker,
    Talk,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Agenda,
    Speakers,
    Speaker,
    Donde,
    Info,
    Talk,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataProvider,    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
