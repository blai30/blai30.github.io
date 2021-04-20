import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DarkToggleComponent } from './dark-toggle.component';
import { ScrollTopComponent } from './scroll-top.component';

@NgModule({
  declarations: [
    DarkToggleComponent,
    ScrollTopComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DarkToggleComponent,
    ScrollTopComponent,
  ],
})
export class SharedModule {
}
