import { Injectable } from '@angular/core';
import { Recentordermodel } from './recentordermodel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecentordersService {
  URL="http://localhost:9091/getallorders";

  constructor(private httpClient: HttpClient) { }

  getorderList(): Observable<Recentordermodel[]>{
    return this.httpClient.get<Recentordermodel[]>(`${this.URL}`);
  }
}
