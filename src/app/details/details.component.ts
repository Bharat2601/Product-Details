import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataTypes } from '../product-data-types.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productData:any | ProductDataTypes;
  constructor(private activeRoute:ActivatedRoute, private product:ProductService) { }

  
  ngOnInit(): void {
    let productId=this.activeRoute.snapshot.paramMap.get('productId');
    console.warn(productId);
    productId && this.product.getProductDetails(productId).subscribe((result)=>{
      console.warn(result)
      this.productData=result;
    })
  }
}
