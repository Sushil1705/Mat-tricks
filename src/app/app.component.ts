import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My-app';
  opened = false;
  mode = "side";
  constructor(private observer: BreakpointObserver) { }
  ngOnInit(): void {
    this.observer.observe('(max-width: 700px)').subscribe((res) => {
      console.log(res);

      if (res.matches) {
        this.mode  = "over"
        this.opened = false;
      }
      else {
        this.mode = "side"
          this.opened = true;
      }

    });

  }

}

