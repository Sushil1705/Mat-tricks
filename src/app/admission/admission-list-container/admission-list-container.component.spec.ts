import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionListContainerComponent } from './admission-list-container.component';

describe('AdmissionListContainerComponent', () => {
  let component: AdmissionListContainerComponent;
  let fixture: ComponentFixture<AdmissionListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
