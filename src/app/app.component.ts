import { Component, ViewChild, OnInit } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('productList', {static: true}) productList: ProductListComponent;
  title = 'Lab4';

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.productList.products = [
      {
        name: 'ส้มโอ',
        price: 111
      },
      {
        name: 'แตงโม',
        price: 222
      },
      {
        name: 'มะพร้าวนํ้าหอม',
        price: 333
      }
    ];
  }
}
