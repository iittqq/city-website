import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CategoryButtonComponent } from "./category-button/category-button.component";

const icons = [
  { id: 0, name: "apartment" },
  { id: 1, name: "flag" },
  { id: 2, name: "account_balance" },
  { id: 3, name: "savings" },
  { id: 4, name: "health_and_safety" },
  { id: 5, name: "emoji_transportation" },
];

@Component({
  selector: "app-root",
  imports: [RouterOutlet, CategoryButtonComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "city-website";
  icons: { id: number; name: string }[] = icons;
}
