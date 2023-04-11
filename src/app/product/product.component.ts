import {AfterViewInit, Component, HostListener, OnInit, SimpleChanges} from '@angular/core';
import {Category} from "./entity/category";
import {Product} from "./entity/product";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  categoryList: Array<Category> = [
    {
      id: 1,
      name: 'Shampoo'
    },
    {
      id: 2,
      name: 'Comb'
    },
    {
      id: 3,
      name: 'Pomade'
    }
  ];
  productList: Array<Product> = [
    {
      id: 1,
      name: 'Brosh Human',
      type: 'Brosh',
      img: '/assets/img/products/borsh-human.jpg',
      price: 300,
      category: this.categoryList[2]
    },
    {
      id: 2,
      name: 'Brosh Owl',
      type: 'Brosh',
      img: '/assets/img/products/borsh-owl.jpg',
      price: 300,
      category: this.categoryList[2]
    },
    {
      id: 3,
      name: 'Brosh Fire',
      type: 'Brosh',
      img: '/assets/img/products/brosh-fire.jpg',
      price: 300,
      category: this.categoryList[2]
    },
    {
      id: 4,
      name: 'Three head comp',
      img: '/assets/img/products/luot-chai-3-dau.jpg',
      price: 300,
      category: this.categoryList[1]
    },
    {
      id: 5,
      name: 'Collapse comp',
      img: '/assets/img/products/luot-chai-culture-pom.jpg',
      price: 300,
      category: this.categoryList[1]
    },
    {
      id: 6,
      name: 'Culture comp',
      img: '/assets/img/products/luot-gap-bo-tui.jpg',
      price: 300,
      category: this.categoryList[1]
    },
    {
      id: 7,
      name: 'Maverick black',
      type: 'Maverick',
      img: '/assets/img/products/maverick-black.jpg',
      price: 300,
      category: this.categoryList[2]
    },
    {
      id: 8,
      name: 'Maverick white',
      img: '/assets/img/products/maverick-white.jpg',
      price: 300,
      category: this.categoryList[2]
    },
    {
      id: 9,
      name: 'Prospector black',
      type: 'Prospector',
      img: '/assets/img/products/prospector-black.jpg',
      price: 300,
      category: this.categoryList[1]
    },
    {
      id: 10,
      name: 'Prospector brown',
      type: 'Prospector',
      img: '/assets/img/products/prospector-brown.jpg',
      price: 300,
      category: this.categoryList[2]
    },
    {
      id: 11,
      name: 'Prospector gold',
      type: 'Prospector',
      img: '/assets/img/products/prospector-gold.png',
      price: 300,
      category: this.categoryList[2]
    },
    {
      id: 12,
      name: 'Suavegito black',
      type: 'Suavegito',
      img: '/assets/img/products/Suavegito-black.jpg',
      price: 300,
      category: this.categoryList[2]
    },
    {
      id: 13,
      name: 'Suavegito black skull',
      type: 'Suavegito',
      img: '/assets/img/products/Suavegito-black-daulau.jpg',
      price: 300,
      category: this.categoryList[2]
    },
    {
      id: 14,
      name: 'Suavegito white skull',
      type: 'Suavegito',
      img: '/assets/img/products/Suavegito-white-daulau.jpg',
      price: 300,
      category: this.categoryList[2]
    },
    {
      id: 15,
      name: 'Beard Oil',
      img: '/assets/img/products/tinh-dau-duong-rau.png',
      price: 300,
      category: this.categoryList[0]
    },
    {
      id: 16,
      name: 'Beard Oil',
      img: '/assets/img/products/tinh-dau-duong-rau-2.jpeg',
      price: 300,
      category: this.categoryList[0]
    }
  ];
  currentPage: number = 1;
  pageSize: number = 6;
  tempArr = new Array(this.getTotalPage());


  getPageBegin() {
    return (this.currentPage - 1) * this.pageSize;
  }

  getPageEnd() {
    return (this.currentPage - 1) * this.pageSize + this.pageSize;
  }

  getTotalPage() {
    return Math.ceil(this.productList.length / this.pageSize);
  }

  previousPage() {
    this.currentPage--;
    this.chosenPage();
  }

  nextPage() {
    this.currentPage++;
    this.chosenPage();
  }

  jumpPage(newPage: number, pageDOM: HTMLElement) {
    this.currentPage = newPage;
    //@ts-ignore
    let pageListDOM = document.querySelectorAll('.page');
    pageListDOM.forEach(element => {
      element.classList.contains('test') ? element.classList.remove('test') : undefined;
    })
    pageDOM.classList.add('test')
  }

  @HostListener('click', ['$event'])
  onClick() {
    // @ts-ignore
    let previousBtnDOM = document.querySelector('#previousBtn');
    let nextBtnDOM = document.querySelector('#nextBtn');
    if (this.currentPage <= 1) {
      // @ts-ignore
      previousBtnDOM.setAttribute('disabled', '');
      // @ts-ignore
      nextBtnDOM.removeAttribute('disabled');
    } else if (this.currentPage == this.getTotalPage()) {
      // @ts-ignore
      nextBtnDOM.setAttribute('disabled', '');
    } else {
      // @ts-ignore
      previousBtnDOM.removeAttribute('disabled');
    }
  }

  fistPageChose() {
    let firstPage = document.querySelector('.page');
    // @ts-ignore
    firstPage.classList.add('test');
  }

  chosenPage() {
    let listPage = document.querySelectorAll('.page');
    listPage.forEach(element => {
      if (element.classList.contains('test')) {
        element.classList.remove('test');
      }
      // @ts-ignore
      if (element.textContent == this.currentPage) {
        element.classList.add('test');
      }
    })
  }

  ngAfterViewInit(): void {
    this.fistPageChose();
  }

}
