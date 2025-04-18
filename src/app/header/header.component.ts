import { Component, ViewChild, ElementRef, HostListener } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-header",
  imports: [MatIconModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  searchExpanded = false;

  @ViewChild("searchInput") searchInput!: ElementRef;
  @ViewChild("searchContainer") searchContainer!: ElementRef;

  toggleSearch() {
    this.searchExpanded = !this.searchExpanded;
    if (this.searchExpanded) {
      setTimeout(() => {
        this.searchInput.nativeElement.focus();
      });
    }
  }

  onSearchBlur() {
    if (!this.searchInput.nativeElement.value) {
      this.searchExpanded = false;
    }
  }

  onSearchEnter() {
    const value = this.searchInput.nativeElement.value.trim();
    if (value) {
      console.log("Search value: ", value);
    }
  }

  @HostListener("document:click", ["$event"])
  handleClickOutside(event: MouseEvent) {
    if (
      this.searchContainer &&
      !this.searchContainer.nativeElement.contains(event.target)
    ) {
      this.searchExpanded = false;
    }
  }
}
