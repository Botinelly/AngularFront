import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.css']
})
export class ModalCreateComponent implements OnInit {
    deviceForm!: FormGroup
    form: any;

  constructor(
    public dialogRef: MatDialogRef<ModalCreateComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private fb: FormBuilder,
    public categorService: CategoryService
  ) {
    this.initializeForm();
    this.onSubmit();
  }

  ngOnInit(): void {
    this.clearForm()
  }

  initializeForm(): void {
    this.deviceForm = this.fb.group({
      nome: null,
      comodo: null,
      ip: null,
      consumo: null
    })
  }

  onSubmit():void {
    this.deviceForm.valueChanges.subscribe((value) => {
      this.form = value;
    });
  }

  setDevice():void {
    this.categorService.setDevices(this.form);
    this.clearForm();
  }

  clearForm():void{
    this.deviceForm.reset();
  }
  
  closeModal(): void {
    this.dialogRef.close();
  }

}
