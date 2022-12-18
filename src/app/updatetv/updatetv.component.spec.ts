import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetvComponent } from './updatetv.component';

describe('UpdatetvComponent', () => {
  let component: UpdatetvComponent;
  let fixture: ComponentFixture<UpdatetvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatetvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
