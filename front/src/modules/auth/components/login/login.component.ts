import { Component, inject, Injectable } from '@angular/core';
import { AuthServicesService } from '../../../../app/services/auth/auth-services.service';
import { Interface } from 'readline';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


export interface auth{
  nombre: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthServicesService,
    private router: Router
  ) {}

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });

    this.registerForm = this.fb.group({
      nombre: [''],
      email: [''],
      password: ['']
    });

  }

  login() {

    const credentials = this.loginForm.value;

    this.authService.login(credentials).subscribe({
      next: (response: any) => {

        if(response.token){
          localStorage.setItem('authToken', response.token);
          this.router.navigate(['/']);
        }

        console.log('Login successful', response);

      },
      error: error => {
        console.error('Login failed', error);
      }
    });
  }
}