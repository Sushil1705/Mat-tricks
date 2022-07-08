import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { element } from 'protractor';
import { BehaviorSubject, observable, Observable, Subject } from 'rxjs';
import { OverlayComponent } from '../shared/overlay/overlay.component';
import { UserList } from './model/user-model';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
public userdata:FormGroup;
public editdata:BehaviorSubject<UserList|string>
public editdata$:Observable<UserList | string>

public userdata$:Observable<UserList[]>;
  constructor(private userservice:UserService,public dialog: MatDialog) { 
    this.userdata$ = new Observable();
    this.editdata = new BehaviorSubject('');
    this.editdata$ = this.editdata.asObservable();
  }

  ngOnInit(): void {
   this.userdata$ = this.userservice.getuserdata()

  }
  delete(id: number) {
    const overlayref=this.dialog.open(OverlayComponent);
    overlayref.afterClosed().subscribe(res=>{
      console.log(res);
    if(res === true){
      this.userservice.deleteData(id).subscribe((res: UserList) => {
        console.log('new',res);
      });
    }
      
    })
    this.userdata$ = this.userservice.getuserdata();
  }
  edit(element:any){
    console.log('no',element); 
    this.editdata.next(element);
  }
}
