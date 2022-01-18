import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category/category.service';


@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {
  deviceForm!: FormGroup
  form: any;

constructor(
  public dialogRef: MatDialogRef<ModalDeleteComponent>,
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
    id: null
  })
}

onSubmit():void {
  this.deviceForm.valueChanges.subscribe((value) => {
    this.form = value;
  });
}

removeDevice():void {
  this.categorService.removeDevices(this.form);
  this.clearForm();
}

clearForm():void{
  this.deviceForm.reset();
}
closeModal(): void {
  this.dialogRef.close();
}

}
