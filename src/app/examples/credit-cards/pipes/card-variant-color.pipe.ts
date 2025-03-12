/* eslint-disable max-len */
import { Pipe, PipeTransform } from "@angular/core";

type CardVariantColorPipeInputProps = "black" | "blue" | "violet";

type CardVariantColorPipeOutputProps =
  | "credit-card--black"
  | "credit-card--blue"
  | "credit-card--violet";

@Pipe({
  name: "cardVariantColor",
  standalone: false,
})
export class CardVariantColorPipe implements PipeTransform {
  private readonly colorMap: Record<
    CardVariantColorPipeInputProps,
    CardVariantColorPipeOutputProps
  > = {
    black: "credit-card--black",
    blue: "credit-card--blue",
    violet: "credit-card--violet",
  };

  transform(
    value: CardVariantColorPipeInputProps,
  ): CardVariantColorPipeOutputProps {
    return this.colorMap[value];
  }
}
