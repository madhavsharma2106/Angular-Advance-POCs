import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-multiselect-dropdown',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.css']
})
export class MultiselectDropdownComponent implements OnInit {

  public selectedCountries = [];
  public countries = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus",
    "Belgium", "Bosnia & Herzegovina", "Bulgaria", "Croatia", "Cyprus",
    "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia",
    "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo",
    "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Malta",
    "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland",
    "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia",
    "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"];

  constructor(private toasterService: ToasterService) { }

  ngOnInit() {
  }

  selected(country) {
    if(this.selectedCountries.indexOf(country) == -1)
      this.selectedCountries.push(country);
  }

  showToaster(){
    let message = "This is a message from Multi Select Dropdown";
    let messageType = "error";
    this.toasterService.displayToaster(message, messageType);
  }

}
