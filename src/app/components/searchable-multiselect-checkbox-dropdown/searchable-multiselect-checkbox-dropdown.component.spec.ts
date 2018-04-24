import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchableMultiselectCheckboxDropdownComponent } from './searchable-multiselect-checkbox-dropdown.component';

describe('SearchableMultiselectCheckboxDropdownComponent', () => {
  let component: SearchableMultiselectCheckboxDropdownComponent;
  let fixture: ComponentFixture<SearchableMultiselectCheckboxDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchableMultiselectCheckboxDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchableMultiselectCheckboxDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
