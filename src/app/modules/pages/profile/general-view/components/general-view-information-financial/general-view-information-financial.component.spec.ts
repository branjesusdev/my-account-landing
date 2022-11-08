import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralViewInformationFinancialComponent } from './general-view-information-financial.component';

describe('GeneralViewInformationFinancialComponent', () => {
  let component: GeneralViewInformationFinancialComponent;
  let fixture: ComponentFixture<GeneralViewInformationFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralViewInformationFinancialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralViewInformationFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
