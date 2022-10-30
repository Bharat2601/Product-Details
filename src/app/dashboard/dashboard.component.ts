import { Component, OnInit } from '@angular/core';
import { ProductDataTypes } from '../product-data-types.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public productList : any;
  constructor(private api:ProductService) { }

  ngOnInit(): void {
  this.api.getProduct().subscribe((res)=>{
    this.productList=res;
  })
  }

}
