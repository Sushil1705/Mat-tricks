import { Component, OnInit } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { AdmissionDetails } from '../models/admission.model';
import { AdmissionService } from '../services/admission.service';

@Component({
  selector: 'app-admission-form-container',
  templateUrl: './admission-form-container.component.html',
  styleUrls: ['./admission-form-container.component.scss']
})
export class AdmissionFormContainerComponent implements OnInit {
  postaldata$ : Subject<any>
 
  arr =[]
  poststate:string
  Country:string

  constructor(private admissionservice:AdmissionService) { 
    this.postaldata$= new Subject<any>()
  }

  ngOnInit(): void {

  }
  getData(data:AdmissionDetails){
  console.log('data:',data);
  }
  postalPincode(pincode:string){
    console.log(pincode);
    
     this.admissionservice.postalPinCode(pincode).subscribe((res => {
      console.log(res[0].PostOffice)
      console.log(res[0].PostOffice[0].State) 
      this.poststate = res[0].PostOffice[0].State;
      this.Country = res[0].PostOffice[0].Country
      this.arr = [];
      res[0].PostOffice.forEach(element => {
        console.log(element.Name);
        this.arr.push(element.Name)
      });
      this.sendPostalData()
    }))
  }
  sendPostalData(){
    this.postaldata$.next([this.arr,this.poststate,this.Country])
  }
}
