import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OverlayComponent } from 'src/app/shared/overlay/overlay.component';
import { UserList } from '../model/user-model';
import { UserService } from '../service/user.service';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  @Input() public set userdata(value: UserList[] | null){
    if (value) {
      console.log('lol',value);
      this._userdata = value;
    }
  }
  public get userdata(): UserList[] | null {
    return this._userdata;
  }
  @Output() public delete: EventEmitter<number>;
  @Output() public edit: EventEmitter<any>;

  private _userdata : UserList[]
  constructor(private userservice:UserService,private router:Router,public dialog: MatDialog) {
    this.delete = new EventEmitter();
    this.edit = new EventEmitter();

   }
  displayedColumns: string[] = ['name', 'age', 'email', 'mobileno','gender','skills','action'];
 
  ngOnInit(): void {  
  }
  // onDelete(id:number){
  //   console.log(id);  
  //   this.delete.emit(id);
  // }

  onEdit(element){
    this.edit.emit(element);
    console.log(element);
    
  }
  openDialog(id:number) {
    console.log(id);  
    this.delete.emit(id);
  }
}
