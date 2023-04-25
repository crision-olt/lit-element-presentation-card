import { PresentationCardLit } from "../component/PresentationCardLit";

export {};

declare global {
  interface Array<T> {
    challenge8(): string[];
  }
  interface HTMLElementTagNameMap {
    "presentation-card-lit": PresentationCardLit;
  }
}