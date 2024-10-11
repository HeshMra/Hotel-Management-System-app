import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../Services/general services/common.service';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApiConfig } from '../../Enviroment/api.config';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {

  private apiURL: string = ApiConfig.apiURL 
  admindetails: any = {};


  constructor(private router: Router, private commonservice: CommonService, private http: HttpClient) { }

  ngOnInit() {
    this.getAdminData();
  }


  // getAdminData() {
  //   this.commonservice.getAdminDetails()
  //     .subscribe(
  //       (data: any) => {  // Since the backend returns a string, just assign it directly
  //         this.admindetails = data;  // No need for data.body[0]
  //         console.log('Admin details:', this.admindetails); // Log the plain string response
  //       },
  //       (error: any) => {  
  //         console.error('Error fetching data:', error); // Handle error
  //       }
  //     );
  // }

  getAdminData() {

      // Retrieve the JWT token from local storage or any other storage method
      const token = localStorage.getItem('token'); // Adjust according to your token storage method
    
      // Set the headers to include the Authorization token
      const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
      });

      
    // Make the HTTP GET request to the backend
    this.http.get(`${this.apiURL}/api/v1/account/my-account`, { responseType: 'text', headers }).subscribe({
      next: (response: string) => {
        console.log(response); // Log the response to the console
        this.admindetails = response; // Optionally, store the response in a variable
      },
      error: (error) => {
        console.error('Error fetching account details:', error); // Handle error case
      }
    });
  }


}
