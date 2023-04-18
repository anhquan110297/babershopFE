import {Component, ElementRef, HostListener, QueryList, ViewChildren} from '@angular/core';
import {Category} from "./entity/category";
import {Product} from "./entity/product";
import {Store} from "@ngrx/store";
import {addProduct} from "../cart-state-store/cart.action";


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
      price: 120,
      category: this.categoryList[2]
    },
    {
      id: 2,
      name: 'Brosh Owl',
      type: 'Brosh',
      img: '/assets/img/products/borsh-owl.jpg',
      price: 150,
      category: this.categoryList[2]
    },
    {
      id: 3,
      name: 'Brosh Fire',
      type: 'Brosh',
      img: '/assets/img/products/brosh-fire.jpg',
      price: 180,
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
      price: 600,
      category: this.categoryList[1]
    },
    {
      id: 6,
      name: 'Culture comp',
      img: '/assets/img/products/luot-gap-bo-tui.jpg',
      price: 400,
      category: this.categoryList[1]
    },
    {
      id: 7,
      name: 'Maverick black',
      type: 'Maverick',
      img: '/assets/img/products/maverick-black.jpg',
      price: 450,
      category: this.categoryList[2]
    },
    {
      id: 8,
      name: 'Maverick white',
      img: '/assets/img/products/maverick-white.jpg',
      type: 'Maverick',
      price: 280,
      category: this.categoryList[2]
    },
    {
      id: 9,
      name: 'Prospector black',
      type: 'Prospector',
      img: '/assets/img/products/prospector-black.jpg',
      price: 290,
      category: this.categoryList[2]
    },
    {
      id: 10,
      name: 'Prospector brown',
      type: 'Prospector',
      img: '/assets/img/products/prospector-brown.jpg',
      price: 160,
      category: this.categoryList[2]
    },
    {
      id: 11,
      name: 'Prospector gold',
      type: 'Prospector',
      img: '/assets/img/products/prospector-gold.png',
      price: 320,
      category: this.categoryList[2]
    },
    {
      id: 12,
      name: 'Suavegito black',
      type: 'Suavegito',
      img: '/assets/img/products/Suavegito-black.jpg',
      price: 750,
      category: this.categoryList[2]
    },
    {
      id: 13,
      name: 'Suavegito black skull',
      type: 'Suavegito',
      img: '/assets/img/products/Suavegito-black-daulau.jpg',
      price: 540,
      category: this.categoryList[2]
    },
    {
      id: 14,
      name: 'Suavegito white skull',
      type: 'Suavegito',
      img: '/assets/img/products/Suavegito-white-daulau.jpg',
      price: 320,
      category: this.categoryList[2]
    },
    {
      id: 15,
      name: 'Beard Oil',
      img: '/assets/img/products/tinh-dau-duong-rau.png',
      price: 500,
      category: this.categoryList[0]
    },
    {
      id: 16,
      name: 'Beard Oil',
      img: '/assets/img/products/tinh-dau-duong-rau-2.jpeg',
      price: 900,
      category: this.categoryList[0]
    }
  ];
  productListRef: Array<Product> = [...this.productList];
  typeList = new Set(this.productList.map(c => c.type));
  test = this.productList.filter(ele => ele.type == null);
  currentPage: number = 1;
  pageSize: number = 6;
  totalPageArr = new Array(this.getTotalPage());
  isFirstChecked: boolean = true;
  isFirstPriceCheck: boolean = true;
  // lay toan bo the input dang checkbox
  @ViewChildren('inputDOM') checkboxInputs!: QueryList<any>;

  constructor(private el: ElementRef,
              private store: Store) {
  }

  getPageBegin() {
    return (this.currentPage - 1) * this.pageSize;
  }

  getPageEnd() {
    return (this.currentPage - 1) * this.pageSize + this.pageSize;
  }

  getTotalPage() {
    return Math.ceil(this.productListRef.length / this.pageSize);
  }


  previousPage() {
    if (this.totalPageArr.length != 1 && this.totalPageArr.length > 0) {
      this.currentPage--;
      this.chosenPage();
    }
  }

  nextPage() {
    if (this.totalPageArr.length != 1 && this.totalPageArr.length > 0) {
      this.currentPage++;
      this.chosenPage();
    }
  }

  jumpPage(newPage: number, pageDOM: HTMLElement) {
    if (this.productListRef.length > 0) {
      this.currentPage = newPage;
      //@ts-ignore
      let pageListDOM = document.querySelectorAll('.page');
      pageListDOM.forEach(element => {
        element.classList.contains('test') ? element.classList.remove('test') : undefined;
      })
      pageDOM.classList.add('test')
    }
  }

  @HostListener('click', ['$event'])
  onClick() {
    // @ts-ignore
    if (this.productListRef.length > 0) {
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
        // @ts-ignore
        previousBtnDOM.removeAttribute('disabled');
      } else {
        // @ts-ignore
        previousBtnDOM.removeAttribute('disabled');
      }
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

  @HostListener('window:resize')
  onResize() {
    const width = this.el.nativeElement.offsetWidth;
    if (width <= 749) {
    }
    if (width >= 740 && width <= 1023) {
    }
    if (width > 1023) {
    }
  }

  onChangeFilter(inputDOM: HTMLInputElement, productType: string) {
    let isChecked = inputDOM.checked;
    let itemObjectArr: Array<Product>;
    if (this.isFirstChecked) {
      this.isFirstChecked = false;
      //@ts-ignore
      itemObjectArr = this.productList.filter(item => item.type === productType);
      this.productListRef = itemObjectArr;
      this.totalPageArr = new Array(this.getTotalPage());
      return;
    }

    if (isChecked && productType !== undefined) {
      itemObjectArr = this.productList.filter(item => item.type === productType);
      this.productListRef = this.productListRef.concat(itemObjectArr);
      this.totalPageArr = new Array(this.getTotalPage());
      return;
    }
    if (!isChecked) {
      itemObjectArr = this.productListRef.filter(item => item.type !== productType);
      if (itemObjectArr.length === 0) {
        this.productListRef = [...this.productList]
        this.isFirstChecked = true;
        this.totalPageArr = new Array(this.getTotalPage());
      } else {
        this.productListRef = itemObjectArr;
        this.totalPageArr = new Array(this.getTotalPage());
      }
    }

  }

  categoryFilter(textContent: string | null) {
    if (textContent !== null) {
      this.productListRef = this.productList.filter(item => item.category.name === textContent!);
      this.totalPageArr = new Array(this.getTotalPage());
    }
  }

  clearFilter() {
    this.productListRef = [...this.productList];
    this.totalPageArr = new Array(this.getTotalPage());
    this.checkboxInputs.forEach(input => {
      input.nativeElement.checked = false;
      input.value = '';
    });

  }

  addToCart(product: Product) {
    this.store.dispatch(addProduct(product));
  }

  searchByPrice(minPrice: any, maxPrice: any) {
    minPrice = parseInt(minPrice) | 0;
    maxPrice = parseInt(maxPrice) | 0;
    if (this.productListRef.length === 0) {
      this.productListRef = [...this.productList];
    }
    if ((maxPrice < minPrice) && (maxPrice !== 0 && minPrice !== 0)) {
      this.productListRef = [...this.productList];
      alert('max price have to greater than min price')
    } else {
      if (maxPrice !== 0) {
        this.productListRef = this.productList.filter(item => item.price <= maxPrice && item.price >= minPrice);
        this.totalPageArr = new Array(this.getTotalPage());
      } else {
        console.log('trigger');
        this.productListRef = this.productList.filter(item => item.price >= minPrice);
        this.totalPageArr = new Array(this.getTotalPage());
      }
    }
  }
}
