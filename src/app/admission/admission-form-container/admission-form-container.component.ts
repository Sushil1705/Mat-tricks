import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { AdmissionDetails } from '../models/admission.model';
import { AdmissionService } from '../services/admission.service';

@Component({
  selector: 'app-admission-form-container',
  templateUrl: './admission-form-container.component.html',
  styleUrls: ['./admission-form-container.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AdmissionFormContainerComponent implements OnInit {
  
  postaldata$ : Subject<any>
  public editdata:Subject<AdmissionDetails >
  public editdata$:Observable<AdmissionDetails>
  arr =[]
  poststate:string
  Country:string

  constructor(private admissionservice:AdmissionService) { 
    this.postaldata$= new Subject<any>()
    this.editdata = new Subject();
    this.editdata$ = new Observable();
    this.editdata$ = this.editdata.asObservable();
console.log('yyyy',this.editdata$);

   

  }

  ngOnInit(): void {
this.admissionservice.editdata$.subscribe((res)=>{
  console.log('next:',res);
  this.editdata.next(res)
  debugger
})
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
