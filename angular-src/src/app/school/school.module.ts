
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
import { SharedModule } from 'app/shared/shared.module'; 

 
import { SchoolRoutingModule } from 'app/school/school-router.module';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    ShowComponent,
],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SchoolRoutingModule
 
  ],
  providers: [],
  bootstrap: []
})
export class SchoolModule { }
