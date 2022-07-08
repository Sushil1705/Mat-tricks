import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionFormContainerComponent } from './admission-form-container.component';

describe('AdmissionFormContainerComponent', () => {
  let component: AdmissionFormContainerComponent;
  let fixture: ComponentFixture<AdmissionFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
