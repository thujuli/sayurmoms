export interface CategoryData {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

export interface ProductData {
  title: string;
  imageUrl: string;
  price: number;
  sold: number;
  rating: number;
  discount?: number;
  category: string;
  link: string;
}

export interface CarouselData {
  title: string;
  imageUrl: string;
  link: string;
}
