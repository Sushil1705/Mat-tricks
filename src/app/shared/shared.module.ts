import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './overlay/overlay.component';
import { MaterialModule } from '../material/material.module';
import { OnlyAlphabetsDirective } from './directives/only-alphabets.directive';


@NgModule({
  declarations: [OverlayComponent, OnlyAlphabetsDirective],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    OverlayComponent,
    MaterialModule,
    OnlyAlphabetsDirective
  ]
})
export class SharedModule { }
