import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiShowerComponent } from './li-shower.component';

describe('LiShowerComponent', () => {
  let component: LiShowerComponent;
  let fixture: ComponentFixture<LiShowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiShowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
