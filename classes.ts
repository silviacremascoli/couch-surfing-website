import { Review } from "./interfaces.js";

export class MainProperty {
  title: string;
  src: string;
  reviews: Review[];
  constructor(title: string, src: string, reviews: Review[]) {
    this.title = title;
    this.src = src;
    this.reviews = reviews;
  }
}
