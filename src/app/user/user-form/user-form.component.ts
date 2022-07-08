import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserList } from '../model/user-model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() public set editdata(value: UserList | null){
    console.log('formedit',value);
    if (value) {
      this._editdata = value;
      this.id = value.id;
      this.userForm.patchValue(value)
    }
  }
  public get editdata(): UserList | null {
    return this._editdata;
  }
  private _editdata : UserList

  checked = false;
  public id!: number;
  userForm:FormGroup;
  formtitle : boolean =false;
  public userdata$:Observable<UserList>
  constructor(private fb:FormBuilder ,private userservice:UserService,private activatedRoute:ActivatedRoute) { 
    this.userdata$ = new Observable();
  }

  ngOnInit(): void {
    this.userForm = this.buildform();
  }
  buildform():FormGroup{
    return this.fb.group({
      name:['', [Validators.required,Validators.maxLength(40)]],
      age:['', Validators.required],
      email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobileno:['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      gender:['', Validators.required],
      skills: this.fb.array([this.newSkill()])
    })
  }
   get skills() : FormArray {
    return this.userForm.get("skills") as FormArray
  }
  newSkill(): FormControl {
    return this.fb.control('',Validators.required)
  }
  addSkills() {
    this.skills.push(this.newSkill());
 }
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
  submit(){
      console.log(this.userForm.value);
  }
  onSubmit(){
    console.log(this.userForm.value);
    if(!this.editdata){
      this.userservice.postUserdData(this.userForm.value).subscribe();
    }
    else{
      this.userservice.editData(this.userForm.value,this.id).subscribe();
    }
  }
  onReset(){
    this.userForm.reset()
  }
}
