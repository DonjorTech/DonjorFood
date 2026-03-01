import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface User {
  
}
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  
}
