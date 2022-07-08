import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserList } from '../model/user-model';


@Injectable()
export class UserService {
  public apiLink = environment.baseUrl;
  constructor(private http:HttpClient) { }

  /**
   * @author Sushil Haraiakar
   * @name getuserdata
   * @description this method is for getting user'data
   * @returns observable
   */
  public getuserdata() : Observable<UserList[]>{
    return this.http.get<UserList[]>(`${this.apiLink}/UserList`);
  }

  /**
   * @author Sushil Haraiakar
   * @name postUserdData
   * @description this method is for post user'data
   * @returns observable
   */
   public postUserdData(data:UserList) : Observable<UserList>{
    return this.http.post<UserList>(`${this.apiLink}/UserList`,data);
  }

  /**
   * @author Sushil Haraiakar
   * @name deleteData
   * @description this method is for post user'data
   * @returns observable
   */
  public deleteData(id: number): Observable<UserList> {
    return this.http.delete<UserList>(`${this.apiLink}/UserList/${id}`);
  }


   /**
   * @author Sushil Haraiakar
   * @name getByUserId
   * @description this method is for get user'id from list
   * @returns observable
   */
    public getByUserId(id: number): Observable<UserList> {
      return this.http.get<UserList>(`${this.apiLink}UserList/${id}`);
    }
  
   /**
   * @author Sushil Haraiakar
   * @name editData
   * @description this method is for update user'data
   * @returns observable
   */
    public editData(data:UserList,id: number): Observable<UserList> {
      console.log('editid',id);
      
      return this.http.put<UserList>(`${this.apiLink}UserList/${id}`,data);
    }
}
