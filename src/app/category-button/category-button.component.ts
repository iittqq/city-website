import { Component, input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-category-button",
  imports: [MatIconModule],
  templateUrl: "./category-button.component.html",
  styleUrl: "./category-button.component.css",
})
export class CategoryButtonComponent {
  icons = input.required<{ id: number; name: string }[]>();
}
