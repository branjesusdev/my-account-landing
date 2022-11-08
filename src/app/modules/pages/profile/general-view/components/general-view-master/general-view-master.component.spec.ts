import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralViewMasterComponent } from './general-view-master.component';

describe('GeneralViewMasterComponent', () => {
  let component: GeneralViewMasterComponent;
  let fixture: ComponentFixture<GeneralViewMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralViewMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralViewMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
