import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FormBuilder, Validators } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    // Initialize form with specific validations
    component.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required, Validators.minLength(7),
        Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{7,}$/)
      ] ]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate email format', () => {
    const emailControl = component.form.get('email');
    emailControl.setValue('invalid-email');
    expect(emailControl.valid).toBeFalsy();

    emailControl.setValue('valid@email.com');
    expect(emailControl.valid).toBeTruthy();
  });


  it('should validate password format', () => {
    const passwordControl = component.form.get('password');
    passwordControl.setValue('weak');
    expect(passwordControl.invalid).toBeTruthy();

    passwordControl.setValue('Strong1');
    expect(passwordControl.valid).toBeTruthy();
  });

});

