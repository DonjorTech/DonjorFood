import { Routes } from '@angular/router';
import { SidebarComponent } from '../layout/admin-layout/sidebar/sidebar.component';
import { ProductsComponent } from '../shared/components/products/products.component';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { UsersComponent } from '../shared/components/users/users.component';
import { AdminMainComponent } from '../layout/admin-layout/admin-main/admin-main.component';
import { LoginComponent } from '../modules/auth/components/login/login.component';
import { RegisterComponent } from '../modules/auth/components/register/register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: AdminMainComponent,
        children: [
            { path: 'productos', component: ProductsComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent}
        ]
    }
]
