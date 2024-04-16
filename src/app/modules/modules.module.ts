import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AnimalComponent } from './animal/animal.component';
import { ContactComponent } from './contact/contact.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    AnimalComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    RouterModule
    
  ]
})
export class ModulesModule { }
