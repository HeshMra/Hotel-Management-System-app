import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonService } from '../../Services/general services/common.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiConfig } from '../../Enviroment/api.config';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule,RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  constructor(private http: HttpClient, private router: Router, private commonservice: CommonService) { };

  private apiURL: string = ApiConfig.apiURL

  signupData: any = {};


  onSubmit(form: any) {
    if (form.valid) {

      // Set role to "USER" by default
      this.signupData.role = 'USER';

      console.log("jijhu", this.signupData)
      this.http.post(`${this.apiURL}/api/v1/user/register`, this.signupData, { responseType: 'text' })
        .subscribe(
          (response) => {
            console.log('Inquiry saved successfully:', response);
            alert("User Registered successfully");
            // You can display a success message or redirect
          },
          (error) => {
            console.error('Error saving user:', error);
          }
        );
    } else {
      console.log('Form is invalid');
    }
  }

}
