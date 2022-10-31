import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms"
import { Router } from '@angular/router';
import { signupModel } from '../product-data-types.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  signupModelObj : signupModel = new signupModel();
  
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router,private api : ProductService) {
   }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      mobile: ['',Validators.required]
    })
  }
  signUp(){
    this.signupModelObj.fullname = this.signupForm.value.fullname;
    this.signupModelObj.mobile = this.signupForm.value.mobile;
    this.signupModelObj.email = this.signupForm.value.email;
    this.signupModelObj.password = this.signupForm.value.password;

    this.api.postUsers(this.signupModelObj).subscribe(res=>{
      alert("Sigup Successfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, 
    err=>{
      alert("Something went wrong");
    })
  }

}
