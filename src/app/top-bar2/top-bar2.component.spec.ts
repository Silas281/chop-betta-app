import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBar2Component } from './top-bar2.component';

describe('TopBar2Component', () => {
  let component: TopBar2Component;
  let fixture: ComponentFixture<TopBar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBar2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
