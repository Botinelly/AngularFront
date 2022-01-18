import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalCreateComponent } from '../modal-create/modal-create.component';
import { ModalUpdateComponent } from '../modal-update/modal-update.component';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { CategoryService } from './category.service';
import { ListDeviceType } from './model/Category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ['comodo', 'consumo', 'ip', 'nome', 'id'];
  public listAllDevices: any[] = [];
 
  constructor(public dialogRefModalSetSop: MatDialog, private categoryService: CategoryService) {}

  openModalCreateDevice(): void {
    const dialogRef = this.dialogRefModalSetSop.open(ModalCreateComponent, {
      data: { }
    });
    dialogRef
      .afterClosed()
      .subscribe(() => console.log('modal de criação fechado'));
  }

  openModalUpdateDevice(): void {
    const dialogRef = this.dialogRefModalSetSop.open(ModalUpdateComponent, {
      data: { }
    });
    dialogRef
      .afterClosed()
      .subscribe(() => console.log('modal de atualização fechado'));
  }

  openModalDeleteDevice(): void {
    const dialogRef = this.dialogRefModalSetSop.open(ModalDeleteComponent, {
      data: { }
    });
    dialogRef
      .afterClosed()
      .subscribe(() => console.log('modal de exclusão fechado'));
  }
  
  ngOnInit(): void {
    this.getAlldevices()
  }
    
  async getAlldevices(): Promise<void>{
    console.log("aqui", this.listAllDevices);
    try {
      const data = await this.categoryService.getAllDevice();
      this.listAllDevices = Object.values(data);
    }  catch(error) {};
    console.log("tudo", this.listAllDevices);
  }

}
