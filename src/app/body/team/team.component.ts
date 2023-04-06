import {Component, OnInit} from '@angular/core';
import {Staff} from "./staff";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{
  staffList : Array<Staff> = [
    {
      name : 'James Edison',
      img : `/assets/img/staff-${1}.jpg`,
      description : 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
    },
    {
      name : 'Beryl Zella',
      img : `/assets/img/staff-${2}.jpg`,
      description : 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
    },
    {
      name : 'Joye Sabrina',
      img : `/assets/img/staff-${3}.jpg`,
      description : 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
    },
    {
      name : 'Donald Addyson',
      img : `/assets/img/staff-${4}.jpg`,
      description : 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
    }
  ]
  ngOnInit(): void {
  }

  getDOM(staff: HTMLImageElement) {
    let staffImgClassList = document.querySelectorAll('.team-img');
    let src = staff.getAttribute('src');
    // @ts-ignore
    staffImgClassList.forEach(element => {
      element.classList.contains('team-img-border') ? element.classList.remove('team-img-border') : undefined;
    });
    staff.classList.add('team-img-border');
    // thay doi image
    // @ts-ignore
    document.querySelector('.team-info-img').src = src;
  }
}
