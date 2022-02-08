import {ComponentFixture, TestBed} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserInterface} from "../../../shared/types/UserInterface";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('form validation', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [LoginComponent]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should be form invalid when empty', () => {
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('username validity', () => {
    let username = component.formGroup.controls['username'];
    expect(username.valid).toBeFalsy();
  });

  it('username field validity', () => {
    let username = component.formGroup.controls['username'];
    let errors = username.errors || {}
    expect(errors['required']).toBeTruthy();

    username.setValue('johnd');
    errors = username.errors || {}

    expect(errors['pattern']).toBeTruthy()
  });

  it('should submitting a form emits a user', () => {
    expect(component.formGroup.valid).toBeFalsy();

    component.formGroup.controls['username'].setValue('johnd');
    component.formGroup.controls['password'].setValue('m38rmF$');

    expect(component.formGroup.valid).toBeTruthy();

    let user: UserInterface;
    component.isLoggedIn$.subscribe((value) => user = value);
    component.onLogin();

    expect(user.username).toBe('johnd');
    expect(user.password).toBe('m38rmF$')
  });
})
