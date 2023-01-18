import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Product } from '../product/product';
import { ProductService } from '../service/product.service';
var _ = require('lodash');


@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.scss']
})
export class TableDemoComponent implements OnInit {
  products: Product[] | any;
  products1: any ;
  selectedProducts: Product[] | any;
  selectedProductsBottom: Product[] | any;
  cols: any;
  messageService: any;
  singleRowSelected:any[] = [];;
  singleRowUnSelected:any;
  selectAllRowData:any;
  selectedIDs : any;
  constructor(private productservice: ProductService) {
  }
  
  ngOnInit(): void {
    this.products = this.productservice.dummydata();
    this.cols = [
      { field: "ProductID", header: "ProductID" },
      { field: "ProductName", header: "ProductName" },
      { field: "SupplierID", header: "SupplierID" },
      { field: "CategoryID", header: "CategoryID" },
      { field: "QuantityPerUnit", header: "QuantityPerUnit" },
      { field: "UnitPrice", header: "UnitPrice" },
      { field: "UnitsInStock", header: "UnitsInStock" },
      { field: "UnitsOnOrder", header: "UnitsOnOrder" },
      { field: "ReorderLevel", header: "ReorderLevel" },
      { field: "Discontinued", header: "Discontinued" },
      { field: "OrderDate", header: "OrderDate" }
    ];
    
  }
  // selected single row
  onRowSelect($event?: any) {
  }
  //unselected single row
  onRowUnselect($event?: any) {
  }
  //selected all rows
  onHeaderCheckboxToggle(event?: any) {
  }
  shiftop(){ 
    this.products1 = [ ...this.selectedProducts];
    console.log('R4x pro1',this.products1);
    const namesToDeleteSet = new Set(this.products1);
    this.products = this.products.filter((data:any) =>  !namesToDeleteSet.has(data));
    console.log('R4x',this.products); 
    this.products1.sort((a:any, b:any) => a.ProductID - b.ProductID);
  }
  // bottom
  // selected single row
  onRowSelectB($event?: any) {
  }
  //unselected single row
  onRowUnselectB($event?: any) {
  }
  //selected all rows
  onHeaderCheckboxToggleB(event?: any) {
  }
  shiftBottom(){
    console.log('R4x selected fdgdgdfgdgf',this.selectedProductsBottom);
    const uniqueIds = new Set();
    this.selectedProductsBottom.filter((element:any) => {
      const isDuplicate = uniqueIds.has(element.ProductID);
      uniqueIds.add(element.ProductID);
      if (!isDuplicate) {
        return true;
      }
      return false;
    });
    console.log('R4x selected',this.selectedProductsBottom);
    this.products = [...this.products, ...this.selectedProductsBottom];
    //this.products.push(_.cloneDeep(this.selectedProductsBottom)) ;
    console.log('R4x this.product',this.products);
    // const namesToDeleteSet = new Set(this.products);
    // this.products1 = this.products1.filter((data:any) =>  !namesToDeleteSet.has(data));
    // console.log('R4x',this.products1);
    this.products.sort((a:any, b:any) => a.ProductID - b.ProductID);
  }
}
