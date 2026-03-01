import { Component } from '@angular/core';
import { AuthServicesService } from '../../../../../app/services/auth/auth-services.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
export interface auth{
  nombre: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  ngOnInit(){
    this.registerForm = this.fb.group({
      nombre: [''],
      email: [''],
      password: ['']
    });
  }
    constructor(
      private fb: FormBuilder,
      private authService: AuthServicesService
    ) {}
    register() {

    const newUser = this.registerForm.value;
    console.log("datos enviados", newUser);

    this.authService.register(newUser).subscribe({
      next: response => {
        console.log('Registration successful', response);
      },
      error: error => {
        console.error('Registration failed', error);
      }
    });

  }
}
