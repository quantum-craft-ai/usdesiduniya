import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UDDPost } from '../model/UDDPost'

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private http : HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(`https://lt2zryofeirexagnqteofzd7sy0fclxm.lambda-url.us-east-1.on.aws/posts/accommodation`);
  }

  createAddPost(request: UDDPost): Observable<any> {
    return this.http.post<UDDPost>(`http://127.0.0.1:8000/create-add`, request);
  }

}
