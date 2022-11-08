import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralViewInformationPersonComponent } from './general-view-information-person.component';

describe('GeneralViewInformationPersonComponent', () => {
  let component: GeneralViewInformationPersonComponent;
  let fixture: ComponentFixture<GeneralViewInformationPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralViewInformationPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralViewInformationPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
