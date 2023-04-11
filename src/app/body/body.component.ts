import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @ViewChild('serviceRef') serviceRef : Component | undefined;

  constructor() {
  }


}
