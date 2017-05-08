import { Component } from '@angular/core';

import { Info } from './../info/info';
import { Donde } from './../donde/donde';
import { Agenda } from './../agenda/agenda';
import { Speakers } from './../speakers/speakers';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Agenda;
  tab2Root = Speakers;
  tab3Root = Donde;
  tab4Root = Info;

  constructor() {

  }
}
