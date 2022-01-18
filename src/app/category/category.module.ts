import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select'
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class CategoryModule { }
