import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionListPresentationComponent } from './admission-list-presentation.component';

describe('AdmissionListPresentationComponent', () => {
  let component: AdmissionListPresentationComponent;
  let fixture: ComponentFixture<AdmissionListPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionListPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
