import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-dom-addition',
  templateUrl: './form-dom-addition.component.html',
  styleUrls: ['./form-dom-addition.component.css']
})
export class FormDomAdditionComponent implements OnInit {

  public userForm: FormGroup;
  public selectedCountries = [];
  public countries = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus",
    "Belgium", "Bosnia & Herzegovina", "Bulgaria", "Croatia", "Cyprus",
    "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia",
    "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo",
    "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Malta",
    "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland",
    "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia",
    "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"];

  constructor(private fromBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fromBuilder.group({
      name: [],
      dropdown: ['1'],
      selectedCountries: [this.selectedCountries],
      fArray: this.fromBuilder.array([
        this.initDomForm(),
      ])
    });
  }

  initDomForm() {
    return this.fromBuilder.group({
      inputOne: ['1'],
      inputTwo: ['']
    });
  }

  addDomForm() {
    const control = <FormArray>this.userForm.controls['fArray'];
    control.push(this.initDomForm());
  }

  selected(country) {
    if(this.selectedCountries.indexOf(country) == -1)
      this.selectedCountries.push(country);
  }


  onSubmit() {
    console.log(this.userForm.value);
  }

}
