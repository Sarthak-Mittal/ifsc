import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributors } from '../model/contributors';

const BASE_URL: string = "https://api.github.com/repos/sarthak-mittal/ifsc/contributors";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getContributors(url: string = BASE_URL): Observable<Contributors>{
    return this.http.get<Contributors>(url)
  }

}
