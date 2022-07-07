import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TabsComponent,
    TabComponent
  ],
  imports: [
    MatTabsModule,
    BrowserAnimationsModule
  ],
  exports: [
    TabsComponent
  ]
})
export class TabsModule { }
