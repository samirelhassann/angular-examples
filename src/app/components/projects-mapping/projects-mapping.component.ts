/* eslint-disable no-param-reassign */
import {
  Component,
  AfterViewInit,
  OnDestroy,
  EventEmitter,
  Output,
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

import { Subscription } from "rxjs";

export interface Route {
  label: string;
  route?: string;
  subItems?: Route[];
  showSubItems?: boolean;
  relativePath?: string;
}

@Component({
  selector: "app-projects-mapping",
  standalone: false,
  templateUrl: "./projects-mapping.component.html",
  styleUrls: ["./projects-mapping.component.scss"],
})
export class ProjectsMappingComponent implements AfterViewInit, OnDestroy {
  items: Route[];
  private routerSubscription: Subscription;

  @Output() routeSelectEmitt = new EventEmitter<Route>();

  constructor(private router: Router) {
    this.items = [
      {
        label: "Credit Cards",
        route: "/credit-cards",
        relativePath: "src/app/examples/credit-cards",
      },
      {
        label: "Login Form",
        route: "/login-form",
        relativePath: "src/app/examples/login-form",
      },
      {
        label: "User Listing",
        route: "/user-listing",
        relativePath: "src/app/examples/user-listing",
      },
      {
        label: "Credit Dashboard",
        route: "/credit-dashboard",
        relativePath: "src/app/examples/credit-dashboard",
      },
      {
        label: "Product Card",
        route: "/product-card",
        relativePath: "src/app/examples/product-cards",
      },
      {
        label: "Multi Step Form",
        route: "/multi-step-form",
        relativePath: "src/app/examples/multi-step-form",
      },
    ];

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.items = this.formattedRoutes(this.items);
        this.checkAndEmitRoute(this.router.url);
      }
    });
  }

  ngAfterViewInit(): void {
    this.items = this.formattedRoutes(this.items);
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  formattedRoutes(routes: Route[]): Route[] {
    return routes.map((item) => {
      if (!item.showSubItems) {
        const hasSomeSubItemActivated = item.subItems?.some(
          (subItem) => subItem.route && this.isActive(subItem.route),
        );

        item.showSubItems = hasSomeSubItemActivated ?? false;
      }

      return {
        ...item,
        showSubItems: item.showSubItems || false,
      };
    });
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  toggleSubItems(item: Route): void {
    this.items = this.items.map((route) => {
      if (route.label === item.label) {
        route.showSubItems = !route.showSubItems;
      }

      return route;
    });
  }

  trackByItem(index: number, item: Route): string {
    return item.label;
  }

  trackBySubItem(index: number, subItem: Route): string {
    return subItem.label;
  }

  private checkAndEmitRoute(currentUrl: string): void {
    const matchedRoute = this.items.find((item) => item.route === currentUrl);
    if (matchedRoute) {
      this.routeSelectEmitt.emit(matchedRoute);
    }
  }
}
