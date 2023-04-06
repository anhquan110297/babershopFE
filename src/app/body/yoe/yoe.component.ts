import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-yoe',
  templateUrl: './yoe.component.html',
  styleUrls: ['./yoe.component.css']
})
export class YoeComponent implements OnInit {
  isTrigger: boolean = false;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onscroll() {
    // lấy ra elmt hiện tại, hiện tại là lấy ra nguyên app-yoe
    const elt = this.elRef.nativeElement.querySelector('.yoe-show');
    // trả về tọa độ của một component
    const rect = elt.getBoundingClientRect();
    // khi vị trí của component nằm trong viewport thì trigger function
    if (rect.top >= 0 && rect.bottom <= window.innerHeight && !this.isTrigger) {
      this.countTo();
      this.isTrigger = true;
    }
  }

  countTo() {
    let from: number = 0;
    let to: number = 12;
    let step: number = 1;
    let interval = 250;
    let counter = setInterval(function () {
      from += step;
      // @ts-ignore
      document.querySelector('#yoeNumber').textContent = from;
      if (from == to) {
        clearInterval(counter);
      }
    }, interval);
  }
}
