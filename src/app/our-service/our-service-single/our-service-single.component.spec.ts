import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServiceSingleComponent } from './our-service-single.component';

describe('OurServiceSingleComponent', () => {
  let component: OurServiceSingleComponent;
  let fixture: ComponentFixture<OurServiceSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurServiceSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurServiceSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
