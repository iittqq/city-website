import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TrafficCrashService {
  private apiUrl = "http://localhost:8000/api/traffic-incidents/";

  constructor(private http: HttpClient) {}

  getTrafficData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
