import { Routes } from "@angular/router";
import { IndividualRestaurantComponent } from "./pages/individual-restaurant/individual-restaurant.component";
import { HomeComponent } from "./pages/home/home.component";

export const routes: Routes = [
  { path: "irestaurant", component: IndividualRestaurantComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
];
