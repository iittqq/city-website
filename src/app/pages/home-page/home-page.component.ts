import { Component } from "@angular/core";
import { CategoryButtonComponent } from "../../category-button/category-button.component";
import { CrimeDataInterface } from "../../interfaces/crime-data-interface";
import { CrimeService } from "../../services/crime.service";
import { FoodInspectionService } from "../../services/food-inspection.service";
import { FoodInspectionInterface } from "../../interfaces/food-inspection-interface";
import { TrafficCrashService } from "../../services/traffic-crash.service";
import { TrafficCrashInterface } from "../../interfaces/traffic-crash-interface";

const icons = [
  {
    id: 0,
    name: "apartment",
    label: "Housing and Development",
    description:
      "Explore residential and commercial development activity in Baton Rouge via data ranging from detailed lot, address and jurisdictional information to neighborhood maps and permit information.",
  },
  {
    id: 1,
    name: "flag",
    label: "Culture and Recreation",
    description:
      "Learn more about Baton Rouge’s cultural landmarks via detailed mapping data for sites such as historic landmarks and scenic areas, or explore recreation data for golf courses, parks and more.",
  },
  {
    id: 2,
    name: "account_balance",
    label: "Government",
    description:
      "Take some time to explore the ins-and-outs of our City-Parish government, from current and historic employee salary information to data for City-Parish public facilities.",
  },
  {
    id: 3,
    name: "savings",
    label: "Business and Financial",
    description:
      "Learn more about the foundation of Baton Rouge’s local economy. Key data points provided in these data sets include occupational license information, NAICS codes, business registrations and more.",
  },
  {
    id: 4,
    name: "health_and_safety",
    label: "Public Safety",
    description:
      "Get access to critical public safety indicators, including current crime data and statistics such as police or fire incidents, traffic and vehicle accident information, and more.",
  },
  {
    id: 5,
    name: "emoji_transportation",
    label: "Transportation and Infrastructure",
    description:
      "Learn more about what keeps Baton Rouge moving via data such as detailed traffic flow counts, street data, transit routes and more.",
  },
];

@Component({
  selector: "app-home-page",
  imports: [CategoryButtonComponent],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.css",
})
export class HomePageComponent {
  title = "city-website";
  icons: { id: number; name: string; label: string; description: string }[] =
    icons;
  crimeData: CrimeDataInterface[] = [];
  foodInspectionData: FoodInspectionInterface[] = [];
  trafficCrashData: TrafficCrashInterface[] = [];

  constructor(
    private crimeService: CrimeService,
    private foodInspectionService: FoodInspectionService,
    private trafficCrashService: TrafficCrashService,
  ) {}

  ngOnInit(): void {
    this.crimeService.getCrimeData().subscribe({
      next: (data: CrimeDataInterface[]) => {
        this.crimeData = data;
        console.log("Crime Data:", this.crimeData);
      },
      error: (err) => {
        console.error("Error fetching crime data:", err);
      },
    });
    this.foodInspectionService.getFoodData().subscribe({
      next: (data: FoodInspectionInterface[]) => {
        this.foodInspectionData = data;
        console.log("Food Data:", this.foodInspectionData);
      },
      error: (err) => {
        console.error("Error fetching food inspection data:", err);
      },
    });

    this.trafficCrashService.getTrafficData().subscribe({
      next: (data: TrafficCrashInterface[]) => {
        this.trafficCrashData = data;
        console.log("Traffic Incidents:", this.trafficCrashData);
      },
      error: (err) => {
        console.error("Error fetching traffic incidents data:", err);
      },
    });
  }
}
