import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../components/home/home.component';
import { FormComponent } from '../../components/form/form.component';
import { MultiselectDropdownComponent } from '../../components/multiselect-dropdown/multiselect-dropdown.component';
import { FormDomAdditionComponent } from '../../components/form-dom-addition/form-dom-addition.component';
import { SearchableMultiselectCheckboxDropdownComponent } from '../../components/searchable-multiselect-checkbox-dropdown/searchable-multiselect-checkbox-dropdown.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'multiselect-dropdown', component: MultiselectDropdownComponent },
  { path: 'form-dom-addition', component: FormDomAdditionComponent },
  { path: 'searchable-multiselect-checkbox-dropdown', component: SearchableMultiselectCheckboxDropdownComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
