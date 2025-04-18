import { Component } from "@angular/core";
import { HeaderComponent } from "../../header/header.component";
import { CategoryButtonComponent } from "../../category-button/category-button.component";

@Component({
  selector: "app-home",
  imports: [HeaderComponent, CategoryButtonComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  icons = [
    {
      id: 0,
      name: "apartment",
      label: "Housing and Development",
      description:
        "Explore residential and commercial development activity in Baton Rouge via data ranging...",
    },
    {
      id: 1,
      name: "flag",
      label: "Culture and Recreation",
      description:
        "Learn more about Baton Rouge's cultural landmarks via detailed mapping data for sites such as...",
    },
    {
      id: 2,
      name: "account_balance",
      label: "Government",
      description:
        "Take some time to explore the ins-and-outs of our City-Parish government, from current and...",
    },
    {
      id: 3,
      name: "savings",
      label: "Business and Financial",
      description:
        "Learn more about the foundation of Baton Rouge's local economy.  Key data points provided in...",
    },
    {
      id: 4,
      name: "health_and_safety",
      label: "Public Safety",
      description:
        "Get access to critical public safety indicators, including current crime data and statistics...",
    },
    {
      id: 5,
      name: "emoji_transportation",
      label: "Transportation and Infrastructure",
      description:
        "Learn more about what keeps Baton Rouge moving via data such as detailed traffic flow counts...",
    },
  ];
}
