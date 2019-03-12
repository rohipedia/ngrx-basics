import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as basicsAction from './../../store/basics.action';
import { Hobby } from './../../models/hobby.model';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.css']
})
export class DriveComponent implements OnInit {

  hobbyName: string;

  constructor(public store: Store<{basics: number}>) { }

  ngOnInit() {
  }

  addHobby() {
    const hobby: Hobby = { name: this.hobbyName };
    this.store.dispatch(new basicsAction.AddHobby(hobby));
    this.hobbyName = '';
  }

}
