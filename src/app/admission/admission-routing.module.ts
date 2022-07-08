import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionFormContainerComponent } from './admission-form-container/admission-form-container.component';
import { AdmissionListContainerComponent } from './admission-list-container/admission-list-container.component';

import { AdmissionComponent } from './admission.component';

const routes: Routes = [{ path: '', component: AdmissionComponent ,
children:[
  {path:'',component:AdmissionFormContainerComponent},
  {path:'list',component:AdmissionListContainerComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }
