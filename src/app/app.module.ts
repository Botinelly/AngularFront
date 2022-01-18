import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';


import { CategoryComponent } from './category/category.component';
import { CategoryModule } from './category/category.module';
import { ModalCreateComponent } from './modal-create/modal-create.component';
import { ModalUpdateComponent } from './modal-update/modal-update.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ModalCreateComponent,
    ModalUpdateComponent,
    ModalDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CategoryModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
