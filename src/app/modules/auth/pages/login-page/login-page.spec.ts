import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login-page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule],
      declarations: [LoginPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    const mockCredentials = {
      email: '0x0x0x0x0',
      password: '111111111111111111111111'
    }

    //arrange
    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    //act
    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    expect(component.formLogin.invalid).toEqual(true);
  });
});
