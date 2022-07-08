import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { AdmissionDetails } from '../models/admission.model';
import { AdmissionService } from '../services/admission.service';

@Component({
  selector: 'app-admission-list-container',
  templateUrl: './admission-list-container.component.html',
  styleUrls: ['./admission-list-container.component.scss']
})
export class AdmissionListContainerComponent implements OnInit {
  public userdata$ : Observable<AdmissionDetails[]>
  public editdata:BehaviorSubject<AdmissionDetails|string>
public editdata$:Observable<AdmissionDetails | string>
  constructor(private admissionservice:AdmissionService,private router:Router) { 
    this.userdata$ = new Observable<AdmissionDetails[]>()
    this.editdata = new BehaviorSubject('');
    this.editdata$ = this.editdata.asObservable();
  }

  ngOnInit(): void {
 this.userdata$=this.admissionservice.getuserdata();
  }
onDelete(id:string){
  console.log(id);
this.admissionservice.deleteData(id).subscribe()
}
edit(element:any){
  this.admissionservice.edit(element)
  this.router.navigate(['admission/edit'])
}
}