/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/quotes */
import { render } from "@testing-library/angular";

import { SideBarComponent } from "./side-bar.component";

describe("SideBarComponent", () => {
  it("should render the side bar container correctly", async () => {
    const step = { step: 1, title: "Step 1", subTitle: "Subtitle 1" };
    const { container } = await render(SideBarComponent, {
      componentProperties: { step },
    });
    const sideBarContainer = container.querySelector(
      '[data-testid="side-bar-container"]',
    );

    expect(sideBarContainer).toBeTruthy();
  });
});
