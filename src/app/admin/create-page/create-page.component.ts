import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.form  = new FormGroup({
      author: new FormControl('',[Validators.required]),
      title: new FormControl('',[Validators.required]),
      text: new FormControl('',[Validators.required]),
    })
  }

  submit() {
   if (this.form.invalid) {
    return
   }
   
    }

}
