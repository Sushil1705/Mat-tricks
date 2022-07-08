import { Component, OnInit } from '@angular/core';
import { UserList } from 'src/app/user/model/user-model';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
public id : number;
  constructor() { }

  ngOnInit(): void {
  }
  
}
