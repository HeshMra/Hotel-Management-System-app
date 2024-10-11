import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfig } from '../../Enviroment/api.config';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // constructor(private http: HttpClient) { }

  // private apiURL: string = ApiConfig.apiURL 


  // getAdminDetails(): Observable<any> { // Return an Observable
  //   const url= `${this.apiURL}/api/v1/account/my-account`;
  //   return this.http.get<any>(url);
  // }

  // getNoticeDetails(): Observable<any> { // Return an Observable
  //   const url= `${this.apiURL}/api/v1/notice/my-notice`;
  //   return this.http.get<any>(url);
  // }
  
}
