import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  readonly SCROLL_TRIGGER = 100;
  isScroll : boolean;
  @ViewChild('bodyRef') serviceRef : ElementRef | undefined;

  constructor() {
    this.isScroll = false;
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [`$event`])
  onScrollEvent() {
      if (window.scrollY >= this.SCROLL_TRIGGER) {
        this.isScroll = true;
        // @ts-ignore
        document.querySelector('.header-logo').src = 'assets/img/black-logo.png';
      } else {
        this.isScroll = false;
        // @ts-ignore
        document.querySelector('.header-logo').src = 'assets/img/white-logo.png';
      }
  }
}
