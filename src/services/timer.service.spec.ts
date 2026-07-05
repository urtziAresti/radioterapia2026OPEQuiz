import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { TimerService } from "./timer.service";

describe("TimerService", () => {
  let service: TimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(TimerService);
  });

  afterEach(() => {
    service.stop();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should start timer at 00:00", fakeAsync(() => {
    let value = "";

    service.elapsedTime$.subscribe((v) => (value = v));

    service.start();

    expect(value).toBe("00:00");
    expect(service.getElapsedSeconds()).toBe(0);
  }));

  it("should increase elapsed seconds", fakeAsync(() => {
    service.start();

    tick(3000);

    expect(service.getElapsedSeconds()).toBe(3);
  }));

  it("should emit formatted time", fakeAsync(() => {
    let value = "";

    service.elapsedTime$.subscribe((v) => (value = v));

    service.start();

    tick(65000);

    expect(value).toBe("01:05");
  }));

  it("should stop timer", fakeAsync(() => {
    service.start();

    tick(2000);

    service.stop();

    const seconds = service.getElapsedSeconds();

    tick(3000);

    expect(service.getElapsedSeconds()).toBe(seconds);
  }));

  it("should reset timer", fakeAsync(() => {
    let value = "";

    service.elapsedTime$.subscribe((v) => (value = v));

    service.start();

    tick(5000);

    expect(service.getElapsedSeconds()).toBe(5);

    service.reset();

    expect(service.getElapsedSeconds()).toBe(0);
    expect(value).toBe("00:00");
  }));

  it("should format hours correctly", fakeAsync(() => {
    let value = "";

    service.elapsedTime$.subscribe((v) => (value = v));

    service.start();

    tick(3661000);

    expect(value).toBe("01:01:01");
  }));

  it("should allow calling stop twice", () => {
    service.stop();
    service.stop();

    expect().nothing();
  });

  it("should restart timer from zero", fakeAsync(() => {
    service.start();

    tick(5000);

    expect(service.getElapsedSeconds()).toBe(5);

    service.start();

    expect(service.getElapsedSeconds()).toBe(0);

    tick(1000);

    expect(service.getElapsedSeconds()).toBe(1);
  }));
});