import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdmissionDetails } from '../../models/admission.model';
import { AdmissionService } from '../../services/admission.service';
import { ConfirmationOverlayComponent } from './confirmation-overlay/confirmation-overlay.component';

@Component({
  selector: 'app-admission-form-presentation',
  templateUrl: './admission-form-presentation.component.html',
  styleUrls: ['./admission-form-presentation.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AdmissionFormPresentationComponent implements OnInit {

  @Input() public set postaldata(value: any) {
    console.log('postallistdata:', value);
    if (value) {
      this._postaldata = value;
      console.log('state', value[1]);

      this.statepostal = value[1];
      this.citypostal = value[0];
      console.log(value[0]);

    }
  }

  public get postaldata(): any {
    return this._postaldata;
  }
  @Input() public set editdata(value: any ) {
    console.log('editdta:',this.editdata);
    
    console.log('edit:', value);
    debugger
    if (value) {
    console.log('edit:', value);

      this._editdata = value;
      this.addmisionForm.patchValue(value)
    }
  }
  public get editdata(): any {
    return this._editdata;
  }

  public _postaldata: any
  public _editdata: AdmissionDetails

  public statepostal: any
  public citypostal: any


  addmisionForm: FormGroup;
  @Output() ListData = new EventEmitter<AdmissionDetails>();
  @Output() pincode = new EventEmitter<AdmissionDetails>();


  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router, private addmissionservice: AdmissionService) { }
  minDate = new Date(1, 1, 1);
  maxDate = new Date();
  ngOnInit(): void {
    this.addmisionForm = this.buildform();

  }
  buildform(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(40), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      dob: ['', Validators.required],
      address: ['', [Validators.required, Validators.maxLength(200)]],
      bloodgroup: ['', [Validators.required, Validators.pattern("^(A|B|AB|O)[+|-]$")]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobileno: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      pincode: ['', Validators.required],
      state: [''],
      city: ['', Validators.required],
      gender: ['', Validators.required],
      subject: this.fb.array([this.newSubject()])
    })
  }
  get subject(): FormArray {
    return this.addmisionForm.get("subject") as FormArray
  }
  newSubject(): FormControl {
    return this.fb.control('', Validators.required)
  }
  addSkills() {
    this.subject.push(this.newSubject());
  }
  removeSkill(i: number) {
    this.subject.removeAt(i);
  }
  submit() {
    console.log(this.addmisionForm.value);
  }
  onSubmit() {
    console.log('valid:', this.addmisionForm.valid);
    if(!this.editdata){
      if (this.addmisionForm.valid) {
        console.log('addmission', this.addmisionForm.value);
        const overlayref = this.dialog.open(ConfirmationOverlayComponent, { data: this.addmisionForm.value });
        overlayref.afterClosed().subscribe(res => {
          console.log(res);
          this.addmissionservice.postAdmissionData(this.addmisionForm.value).subscribe((res) => {
            console.log('form:', res);
          })
        })
        this.ListData.emit(this.addmisionForm.value);
  
      }
    }
    this.addmissionservice.editData(this.addmisionForm.value,this.editdata.id).subscribe()
  }
  onPincode() {
    console.log(this.addmisionForm.controls['pincode'].value);
    if (this.addmisionForm.controls['pincode'].valid) {
      this.pincode.emit(this.addmisionForm.controls['pincode'].value);
    }
  }
  onlyAlphabets(event): boolean {
    const chareCode = (event.which) ? event.which : event.keyCode;
    if (chareCode > 31 && (chareCode < 48 || chareCode > 57)) {
      console.log('charcode:', chareCode);
      return true;

    }
    return false;
  }
  onlyNumbers(event): boolean {
    const chareCode = (event.which) ? event.which : event.keyCode;
    if (chareCode > 31 && (chareCode < 48 || chareCode > 57)) {
      console.log('charcode:', chareCode);
      return false;

    }
    return true;
  }
}
