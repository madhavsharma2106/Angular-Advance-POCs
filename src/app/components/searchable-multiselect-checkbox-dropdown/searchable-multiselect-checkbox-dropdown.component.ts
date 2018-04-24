import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchable-multiselect-checkbox-dropdown',
  templateUrl: './searchable-multiselect-checkbox-dropdown.component.html',
  styleUrls: ['./searchable-multiselect-checkbox-dropdown.component.css']
})
export class SearchableMultiselectCheckboxDropdownComponent implements OnInit {
  public hotelDetails = [
    { name: 'Best Western', id: 1 },
    { name: 'Hilton', id: 2 },
    { name: 'Hyatt', id: 3 },
    { name: 'InterContinental', id: 4 },
    { name: 'Radisson', id: 5 },
    { name: 'Sheraton', id: 6 },
    { name: 'Westin', id: 7 },
    { name: 'Taj Lake Palace', id: 8 },
    { name: 'Rambagh Palace', id: 9 },
    { name: 'Umaid Bhawan Palace', id: 10 },
    { name: 'Taj Falaknuma Palace', id: 11 },
    { name: 'SUJÁN Rajmahal Palace', id: 12 },
    { name: 'SUJÁN The Serai', id: 13 },
    { name: 'The Oberoi Vanyavilas, Ranthambhore', id: 14 },
    { name: 'Banjaar Tola', id: 15 }
  ];

  public selectedHotels = [];
  public hotelDropdownList = [];
  constructor() { }

  ngOnInit() {
  }

  userSearchQueryFocused(){
    this.hotelDropdownList = this.hotelDetails;
  }

  userSearchQuery(query) {
    if (query == '') {
      this.hotelDropdownList = [];
    } else {
      this.hotelDropdownList = [];
      query = query.toUpperCase();
      for (let i = 0, len = this.hotelDetails.length; i < len; i++) {
        let combinedSearch = this.hotelDetails[i].name + this.hotelDetails[i].id;
        if (combinedSearch.toUpperCase().indexOf(query) != -1) this.hotelDropdownList.push(this.hotelDetails[i]);
      }
    }
  }

  itemChecked(hotel) {
    let index = this.selectedHotels.indexOf(hotel.name);
    if (index == -1) {
      this.selectedHotels.push(hotel.name);
    } else {
      this.selectedHotels.splice(index, 1);
    }
  }

  isChecked(hotel){
    return this.selectedHotels.indexOf(hotel.name) != -1 ? true : false;
  }

}
