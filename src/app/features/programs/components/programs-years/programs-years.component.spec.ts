import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsYearsComponent } from './programs-years.component';

describe('ProgramsYearsComponent', () => {
  let component: ProgramsYearsComponent;
  let fixture: ComponentFixture<ProgramsYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramsYearsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
