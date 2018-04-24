import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  firstTab: boolean = false;
  secondTab: boolean = true;
  thirdTab: boolean = true;

  demoForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.demoForm = this.formBuilder.group({
      firstTab: ['Default Name', Validators.required],
      secondTab: ['', Validators.required],
      thirdTab: ['', Validators.required],
    });
  }

  submitForm() {
    console.log(this.demoForm.value);
  }

  toggleTabs(tab) {
    this.firstTab = true;
    this.secondTab = true;
    this.thirdTab = true;
    if (tab === 1) this.firstTab = false;
    if (tab === 2) this.secondTab = false;
    if (tab === 3) this.thirdTab = false;
  }
}
