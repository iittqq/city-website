import { TestBed } from "@angular/core/testing";

import { TrafficCrashService } from "./traffic-crash.service";

describe("TrafficCrashService", () => {
  let service: TrafficCrashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficCrashService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
