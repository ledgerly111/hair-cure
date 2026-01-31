export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  duration: string;
  price: string;
  color: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}