import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from '../Components/navigation-bar/navigation-bar.component';
import { AuthService } from '../Services/AuthServices/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private authService: AuthService) { }
  title = 'Hotelapp';


  // Method to check if user is logged in
  isLoggedIn(): boolean {
    const isAuthenticated = this.authService.isAuthenticated();
    console.log('User is logged in:', isAuthenticated);
    return isAuthenticated;
  }
}
