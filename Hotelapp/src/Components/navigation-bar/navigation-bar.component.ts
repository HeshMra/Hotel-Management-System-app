import { Component } from '@angular/core';
import { AuthService } from '../../Services/AuthServices/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
  constructor(public authservice:AuthService) { }



}
