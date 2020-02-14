import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../Service/register.service';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationFormComponent implements OnInit {
  page=1;
  registerForm: FormGroup;
  validate:any
  constructor(private route:Router,
    private formBuilder: FormBuilder,
    private _service: RegisterService) { }

  ngOnInit() {
    this.initForm();
    }

  initForm() {
    this.registerForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: [''],
      message: ['', [Validators.required]],
      Organization: [''],
  });
  }
  
  get f() { return this.registerForm.controls; }

  nextPage(){
    if(this.page<=2){
      this.page=this.page+1;
       }
    else this.page=1
  }
  backPage(){
    if(this.page>=1){
      this.page=this.page-1;
    }
    else this.page=1
  }

  onSubmit(){
    this._service.postRegistertation(this.registerForm.value)
    .subscribe(res=>{
      this.onReset()
      this.page=1
      this.ngOnInit()
    })
  }
  onReset() {
    this.registerForm.reset();
    }
}
