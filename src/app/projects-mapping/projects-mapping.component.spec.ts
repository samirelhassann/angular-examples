import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectsMappingComponent } from "./projects-mapping.component";

describe("ProjectsMappingComponent", () => {
  let component: ProjectsMappingComponent;
  let fixture: ComponentFixture<ProjectsMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsMappingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
