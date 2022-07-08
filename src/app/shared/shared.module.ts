import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './overlay/overlay.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [OverlayComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    OverlayComponent,
    MaterialModule
  ]
})
export class SharedModule { }
