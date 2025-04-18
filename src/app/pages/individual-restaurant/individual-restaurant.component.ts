import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: "app-individual-restaurant",
  imports: [HeaderComponent],
  templateUrl: "./individual-restaurant.component.html",
  styleUrl: "./individual-restaurant.component.css",
})
export class IndividualRestaurantComponent implements OnInit {
  restaurantId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.restaurantId = params.get("id");
      console.log("Loaded restaurant ID:", this.restaurantId);
      // You can use this ID to fetch restaurant data from a service
    });
  }
}
