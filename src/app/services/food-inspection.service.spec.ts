import { TestBed } from "@angular/core/testing";

import { FoodInspectionService } from "./food-inspection.service";

describe("FoodInspectionService", () => {
  let service: FoodInspectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodInspectionService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
