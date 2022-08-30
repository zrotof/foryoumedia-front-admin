import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAddEditComponent } from './show-add-edit.component';

describe('ShowAddEditComponent', () => {
  let component: ShowAddEditComponent;
  let fixture: ComponentFixture<ShowAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
