import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DataComponent } from "./data.component";

describe("DataComponent", () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should open file", () => {
    spyOn(window, "open");

    component.openFile("/assets/docs/test.pdf");

    expect(window.open).toHaveBeenCalledWith(
      "/assets/docs/test.pdf",
      "_blank"
    );
  });

  it("should open pdf in Google Viewer", () => {
    spyOn(window, "open");

    component.openPDF();

    const fileUrl = new URL(
      "https://radioterapia2026-ope.vercel.app/assets/docs/preguntasOK.pdf",
      document.baseURI
    ).href;

    const expected =
      `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(fileUrl)}`;

    expect(window.open).toHaveBeenCalledWith(
      expected,
      "_blank"
    );
  });
});