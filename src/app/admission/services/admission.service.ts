import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdmissionDetails } from '../models/admission.model';

@Injectable()
export class AdmissionService {
  public apiLink = environment.baseUrl;
  public editdata:Subject<AdmissionDetails>
  public editdata$:Observable<AdmissionDetails>


  constructor(private http:HttpClient) { 
    this.editdata = new Subject();
    this.editdata$ = this.editdata.asObservable();
  }
   /**
   * @author Sushil Haraiakar
   * @name postAdmissionData
   * @description this method is for post user'data
   * @returns observable
   */
    public postAdmissionData(data:AdmissionDetails) : Observable<AdmissionDetails>{
      return this.http.post<AdmissionDetails>(`${this.apiLink}/AdmissionDetails`,data);
    }
     
  /**
   * @author Sushil Haraiakar
   * @name getuserdata
   * @description this method is for getting user'data
   * @returns observable
   */
  public getuserdata() : Observable<AdmissionDetails[]>{
    return this.http.get<AdmissionDetails[]>(`${this.apiLink}/AdmissionDetails`);
  }

  /**
   * @author Sushil Haraiakar
   * @name deleteData
   * @description this method is for post user'data
   * @returns observable
   */
   public deleteData(id: string): Observable<AdmissionDetails> {
    return this.http.delete<AdmissionDetails>(`${this.apiLink}/AdmissionDetails/${id}`);
  }
  /**
   * @author Sushil Haraiakar
   * @name deleteData
   * @description this method is for post user'data
   * @returns observable
   */
   public postalPinCode(pincode: string): Observable<any> {
    return this.http.get<any>(`https://api.postalpincode.in/pincode/${pincode}`);
  }
  
   /**
   * @author Sushil Haraiakar
   * @name editData
   * @description this method is for update user'data
   * @returns observable
   */
    public editData(data:AdmissionDetails,id: string): Observable<AdmissionDetails> {
      console.log('editid',id);  
      return this.http.put<AdmissionDetails>(`${this.apiLink}AdmissionDetails/${id}`,data);
    }
    edit(element:any){
      console.log('no',element); 
      this.editdata.next(element);
    }
}
