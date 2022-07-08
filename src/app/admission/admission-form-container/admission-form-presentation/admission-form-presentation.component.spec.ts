import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionFormPresentationComponent } from './admission-form-presentation.component';

describe('AdmissionFormPresentationComponent', () => {
  let component: AdmissionFormPresentationComponent;
  let fixture: ComponentFixture<AdmissionFormPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionFormPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
