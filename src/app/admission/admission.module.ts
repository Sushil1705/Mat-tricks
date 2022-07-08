import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionComponent } from './admission.component';
import { AdmissionFormContainerComponent } from './admission-form-container/admission-form-container.component';
import { AdmissionListContainerComponent } from './admission-list-container/admission-list-container.component';
import { AdmissionListPresentationComponent } from './admission-list-container/admission-list-presentation/admission-list-presentation.component';
import { AdmissionFormPresentationComponent } from './admission-form-container/admission-form-presentation/admission-form-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ConfirmationOverlayComponent } from './admission-form-container/admission-form-presentation/confirmation-overlay/confirmation-overlay.component';
import { AdmissionService } from './services/admission.service';


@NgModule({
  declarations: [AdmissionComponent, AdmissionFormContainerComponent, AdmissionListContainerComponent, AdmissionListPresentationComponent, AdmissionFormPresentationComponent, ConfirmationOverlayComponent],
  imports: [
    CommonModule,
    AdmissionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers:[AdmissionService]
})
export class AdmissionModule { }
