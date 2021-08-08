import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceProxyService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) { }

 getlist(){
  return this.http.get('apiURL/api/getPolicyHolderList'); 
 }

 savePolicy(data){
  return this.http.post('apiURL/api/createPolicyHolder', data)
 }

}
