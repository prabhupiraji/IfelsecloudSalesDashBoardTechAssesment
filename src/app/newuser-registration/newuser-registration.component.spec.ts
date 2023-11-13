import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewuserRegistrationComponent } from './newuser-registration.component';

describe('NewuserRegistrationComponent', () => {
  let component: NewuserRegistrationComponent;
  let fixture: ComponentFixture<NewuserRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewuserRegistrationComponent]
    });
    fixture = TestBed.createComponent(NewuserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
