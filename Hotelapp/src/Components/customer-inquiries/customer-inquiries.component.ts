import { Component } from '@angular/core';
import { ApiConfig } from '../../Enviroment/api.config';
import { Router } from '@angular/router';
import { CommonService } from '../../Services/general services/common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-inquiries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-inquiries.component.html',
  styleUrl: './customer-inquiries.component.scss'
})
export class CustomerInquiriesComponent {


  private apiURL: string = ApiConfig.apiURL
  
  inquirydetails: any[] = [];
  paginatedInquiry: any[] = []; // Stores only the inquiries for the current page

  currentPage: number = 1;
  itemsPerPage: number = 2; // Number of items to display per page
  totalPages: number=0;


  constructor(private router: Router, private commonservice: CommonService, private http: HttpClient) { }

  ngOnInit() {
    this.getallCustomerInquiries();
  }

  getallCustomerInquiries() {
    // Retrieve the JWT token from local storage or any other storage method
    const token = localStorage.getItem('token'); // Adjust according to your token storage method

    // Set the headers to include the Authorization token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP GET request to the backend
    this.commonservice.getInquiryDetails({ headers })
      .subscribe({
        next: (response) => {
          this.inquirydetails = response.data; // Optionally, store the response in a variable
          this.totalPages = Math.ceil(this.inquirydetails.length / this.itemsPerPage);
          this.updatePaginatedInquiry()
          console.log("inquiry details:", this.inquirydetails); // Log the response to the console
        },
        error: (error) => {
          console.error('Error fetching inquiris:', error);
        }

      });
  }

  updatePaginatedInquiry() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedInquiry = this.inquirydetails.slice(start, end);
  }

  prevPage() {
   
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedInquiry()
    }
  }

  nextPage() {
   

    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedInquiry()
    }
  }
  
}
