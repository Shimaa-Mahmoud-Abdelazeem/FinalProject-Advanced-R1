import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  userform! : FormGroup;

  constructor(private formbuilder: FormBuilder) {}
  ngOnInit(): void
  {
    this.userform =  this.formbuilder.group({
      name:['', [Validators.required ,
        Validators.minLength(3) ,Validators.maxLength(50)]],
        email: ['', [Validators.email] ] ,
        subject:['', [Validators.required ,
        Validators.minLength(3) ,Validators.maxLength(50)]],
        message:['', [Validators.required ,
          Validators.minLength(3) ,Validators.maxLength(300)]],
      });
  }
  save(){
    console.log(this.userform.value);}
}
