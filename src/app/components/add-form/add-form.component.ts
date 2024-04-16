import { Component, Inject, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {

  @Input() data!: string;
  selectedOption: string = '';

  options = [ // Opciones para el mat-select
    { value: 'Animal', viewValue: 'Animal' },
    { value: 'Person', viewValue: 'Person' },
    { value: 'Plant', viewValue: 'Plant' },
    { value: 'Car', viewValue: 'Car' },
    { value: 'Computer', viewValue: 'Computer' },
    { value: 'Phone', viewValue: 'Phone' },
  ];

  addForm = new FormGroup({
    type: new FormControl('', [Validators.required, Validators.minLength(10)]),
    name: new FormControl('', [Validators.required]),
    entity: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });

  constructor(@Inject(MAT_DIALOG_DATA) public receivedData: any) {
    this.data = receivedData;
    this.selectedOption = this.data;
  }


}
