import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators  } from '@angular/forms'
import {zipvalidator,passvalidator} from './validator';
@Component({
  selector: 'app-basicreactiveforms',
  templateUrl: './basicreactiveforms.component.html',
  styleUrls: ['./basicreactiveforms.component.css']
})
export class BasicreactiveformsComponent implements OnInit {

  form:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.form=this.fb.group({
      username:['',[Validators.required,Validators.minLength(4)]],
      password:'',
      cnfpass:['',passvalidator],
      zip:['',zipvalidator],

    });
  
  this.form.controls.password.valueChanges.subscribe(
  x=>
  this.form.controls.cnfpass.updateValueAndValidity()
)
}
submitData(){
  this.form.markAsTouched();
}
  ngOnInit() {
  }

}
