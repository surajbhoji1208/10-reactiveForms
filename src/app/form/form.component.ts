import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb:FormBuilder , private router:Router,private service:UserService)  {}

  ngOnInit(): void {
   
  }

  hide = true;


  userlogin= this.fb.group({
    name:['',[Validators.required,Validators.pattern("[A-Z][a-z]+")]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z]).{8,30}")]]
  })

  userSubmit(){
    console.log(this.userlogin.value);
  
    this.service.postData(this.userlogin.value).subscribe(data=>{
      
    })
   
    // location.reload();
  }

  get email(){
    return this.userlogin.get('email')
  }

  get name(){
    return this.userlogin.get('name')
  }

  get password(){
    return this.userlogin.get('password')
  }


}
