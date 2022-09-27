import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})


export class OrderTableComponent implements OnInit,OnDestroy {

  addCart = 0;
  addFavorite = 0;

  itemData = [
    { name: "Item 1" , action : { inCart: false, isFavorites: false}},
    { name: "Item 2" , action : { inCart: false, isFavorites: false}},
    { name: "Item 3", action : { inCart: false, isFavorites: false}}
  ];

  displayedColumns : string[] = ['name','action'];
  dataSource = new MatTableDataSource(this.itemData);

  constructor() {

  }

  ngOnInit(): void {
  }

  clickEvent(kind:string, item: any): void {
    if (kind == 'cart') {
      item.action.inCart = true;
      this.addCart += 1;
      console.log(this.addCart);
    }else {
      item.action.isFavorites = true;
      this.addFavorite += 1;
      console.log(this.addFavorite)
    }
  }


  /**
   * On destroy
   */
  ngOnDestroy(): void {

  }

}
