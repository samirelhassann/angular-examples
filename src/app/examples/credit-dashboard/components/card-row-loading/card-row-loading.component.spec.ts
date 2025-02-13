import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CardRowLoadingComponent } from "./card-row-loading.component";

describe("CardRowLoadingComponent", () => {
  let component: CardRowLoadingComponent;
  let fixture: ComponentFixture<CardRowLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardRowLoadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardRowLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
