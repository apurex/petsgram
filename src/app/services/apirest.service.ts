import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

const API_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  private urls = {
    user: API_URL + '/user',
    post: API_URL + '/post',
    postByTag: API_URL + '/tag',
  }

  constructor(
    private http: HttpClient
  ) { }

  getUser(user) : Observable<any>{
    return this.http.get<any>(this.urls.user + `/${user}`);
  }

  getPost(page: number = 0) : Observable<any>  {
    let paginate = `?page=${page}&limit=10`;
    return this.http.get<any>(this.urls.post + paginate);
  }

  getPostByTag(tag, page = 0) : Observable<any> {
    let paginate = `?page=${page}&limit=15`;
    return this.http.get<any>(this.urls.postByTag + `/${tag}/post` + paginate);
  }

  commets(post): Observable<any> {
    return this.http.get<any>(this.urls.post + `/${post}/comment`);
  }
  
}
