import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { AdmissionDetails } from '../models/admission.model';
import { AdmissionService } from '../services/admission.service';

@Component({
  selector: 'app-admission-list-container',
  templateUrl: './admission-list-container.component.html',
  styleUrls: ['./admission-list-container.component.scss']
})
export class AdmissionListContainerComponent implements OnInit {
  public userdata$ : Observable<AdmissionDetails[]>
  constructor(private admissionservice:AdmissionService) { 
    this.userdata$ = new Observable<AdmissionDetails[]>()
  }

  ngOnInit(): void {
 this.userdata$=this.admissionservice.getuserdata();
  }
onDelete(id:string){
  console.log(id);
this.admissionservice.deleteData(id).subscribe()
}
}