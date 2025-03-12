import { Directive, Input, HostBinding } from "@angular/core";

type CardVariantColorInputProps = "black" | "blue" | "violet";
type CardVariantColorOutputProps =
  | "credit-card--black"
  | "credit-card--blue"
  | "credit-card--violet";

const COLOR_MAP: Record<
  CardVariantColorInputProps,
  CardVariantColorOutputProps
> = {
  black: "credit-card--black",
  blue: "credit-card--blue",
  violet: "credit-card--violet",
};

@Directive({
  selector: "[appCardVariantColor]",
  standalone: false,
})
export class CardVariantColorDirective {
  @Input() set appCardVariantColor(value: CardVariantColorInputProps) {
    this.currentClass = COLOR_MAP[value] || null;
  }

  @HostBinding("class") currentClass: string | null = null;
}
