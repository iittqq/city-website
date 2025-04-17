import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FoodInspectionService {
  private apiUrl = "http://localhost:8000/api/food-inspections/";

  constructor(private http: HttpClient) {}

  getFoodData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
