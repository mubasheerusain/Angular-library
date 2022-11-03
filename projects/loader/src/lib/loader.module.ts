import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoaderComponent } from './loader.component';
import { LoaderService } from './loader.service';



@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    LoaderComponent
  ],
  providers: [
    LoaderService
  ]
})
export class LoaderModule { }
