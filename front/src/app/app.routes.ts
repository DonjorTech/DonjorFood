import { Routes } from '@angular/router';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { ProductsComponent } from '../shared/components/products/products.component';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { UsersComponent } from '../shared/components/users/users.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: 'productos', component: ProductsComponent },
            { path: 'usuarios', component: UsersComponent }
        ]
    }
]
