import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category/category.service';
import { UpdateDeviceType } from '../category/model/Category';


@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent implements OnInit {
  deviceForm!: FormGroup
  form: any ;

constructor(
  public dialogRef: MatDialogRef<ModalUpdateComponent>,
  @Inject(MAT_DIALOG_DATA)
  public data: any,
  private fb: FormBuilder,
  public categorService: CategoryService
) {
  this.initializeForm();
  this.onSubmit();
}

ngOnInit(): void {
  this.clearForm();
}

initializeForm(): void {
  this.deviceForm = this.fb.group({
    nome: null,
    comodo: null,
    ip: null,
    consumo: null,
    id: null
  })
}

onSubmit():void {
  this.deviceForm.valueChanges.subscribe((value) => {
    this.form = value;
  });
}

updateAlldevice():void {
  this.categorService.updateDevices(this.form);
  this.clearForm();
}

clearForm():void{
  this.deviceForm.reset();
}

closeModal(): void {
  this.dialogRef.close();
}

}
