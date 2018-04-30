import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgpostComponent } from './msgpost.component';

describe('MsgpostComponent', () => {
  let component: MsgpostComponent;
  let fixture: ComponentFixture<MsgpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
