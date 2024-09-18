import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocComponent } from './doc.component';
import { DocRoutingModule } from './doc-routing.module';



@NgModule({
  declarations: [DocComponent],
  imports: [
    CommonModule,
    DocRoutingModule
  ]
})
export class DocModule { }
