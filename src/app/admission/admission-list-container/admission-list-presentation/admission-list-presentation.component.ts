import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AdmissionDetails } from '../../models/admission.model';

@Component({
  selector: 'app-admission-list-presentation',
  templateUrl: './admission-list-presentation.component.html',
  styleUrls: ['./admission-list-presentation.component.scss']
})
export class AdmissionListPresentationComponent implements OnInit {
@Input() public set userdata(value:AdmissionDetails[] | null){
  if(value){
    console.log('listdata:',value);
    this._userdata = value
  }
}

public get userdata(): AdmissionDetails[] | null {
  return this._userdata;
}
@Output() public delete: EventEmitter<string>;
public _userdata : AdmissionDetails[] | null

  constructor() { 
    this.delete = new EventEmitter();

  }
  displayedColumns: string[] = ['name', 'mobileno', 'email', 'dob','gender','address','bloodgroup','subject','action'];

  ngOnInit(): void {
  }
deleteByID(id:string){
console.log(id);
this.delete.emit(id);
  }
}
