import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material/material.module';
import { AddFormComponent } from './add-form/add-form.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardComponent,
    AddFormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule 
  ],
  exports: [
    CardComponent,
    AddFormComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
