/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { Component, AfterViewInit, OnDestroy } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

import { Subscription } from "rxjs";

interface Route {
  label: string;
  route?: string;
  subItems?: Route[];
  showSubItems?: boolean;
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

  constructor(private router: Router) {
    this.items = [
      {

        label: "Credit Cards",
        route: "/credit-cards",
      },
      {
        label: "Login Form",
        route: "/login-form",
      },
      {
        label: "User Listing",
        route: "/user-listing",
      },
    ];

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.items = this.formattedRoutes(this.items);
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
        const hasSomeSubItemActivated = item.subItems?.some((subItem) => subItem.route && this.isActive(subItem.route));

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
}
