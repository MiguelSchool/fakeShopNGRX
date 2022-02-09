import {CategoryInterface} from "./CategoryInterface";

export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  category: CategoryInterface;
  description: string;
  rating: RateInterface;
  image: string;
}

interface RateInterface {
  rate:number;
  count: number
}
