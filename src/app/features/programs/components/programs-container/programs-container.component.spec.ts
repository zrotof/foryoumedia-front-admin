import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsContainerComponent } from './programs-container.component';

describe('ProgramsContainerComponent', () => {
  let component: ProgramsContainerComponent;
  let fixture: ComponentFixture<ProgramsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
