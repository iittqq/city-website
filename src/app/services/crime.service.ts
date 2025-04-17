import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CrimeService {
  private apiUrl = "http://localhost:8000/api/crime/";

  constructor(private http: HttpClient) {}

  getCrimeData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
