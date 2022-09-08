import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramsCalendarComponent } from './programs-calendar.component';


describe('ProgramsYearsComponent', () => {
  let component: ProgramsCalendarComponent;
  let fixture: ComponentFixture<ProgramsCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramsCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
