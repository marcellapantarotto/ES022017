import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAnonymousComponent } from './home-anonymous.component';

describe('HomeAnonymousComponent', () => {
  let component: HomeAnonymousComponent;
  let fixture: ComponentFixture<HomeAnonymousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAnonymousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAnonymousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
