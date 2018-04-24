import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MultiselectDropdownComponent } from './components/multiselect-dropdown/multiselect-dropdown.component';
import { RoutingModule } from './app-routing/routing/routing.module';
import { HomeComponent } from './components/home/home.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormComponent } from './components/form/form.component';
import { FormDomAdditionComponent } from './components/form-dom-addition/form-dom-addition.component';
import { SearchableMultiselectCheckboxDropdownComponent } from './components/searchable-multiselect-checkbox-dropdown/searchable-multiselect-checkbox-dropdown.component';
import { ToasterComponent } from './components/toaster/toaster.component';
import { ToasterService } from './services/toaster.service';



@NgModule({
  declarations: [
    AppComponent,
    MultiselectDropdownComponent,
    HomeComponent,
    SearchPipe,
    FormComponent,
    FormDomAdditionComponent,
    SearchableMultiselectCheckboxDropdownComponent,
    ToasterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [ ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
