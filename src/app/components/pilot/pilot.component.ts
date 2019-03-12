import { Hobby } from './../../models/hobby.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent implements OnInit {

  counter: number = 0;
  hobbies: Hobby[];

  constructor(public store: Store<{basics: number}>) { }

  ngOnInit() {
    this.store.select('basics').subscribe((data: any) => {
      this.counter = data.count;
      this.hobbies = data.hobbies;
    });
  }

}
