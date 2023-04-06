export interface ProfileType {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
}


export interface Inverter {
  id: string;
  created_at: string;
  name: string;
  power: string;
  voltage: number;
  depth: number;
  width: number;
  height: number;
  net_weight: number;
  brand: string;
  image: string;
}


export interface Package {
  id: string;
  created_at: string;
  name: string;
  description: string;
  inverter: string;
  battery: string;
  panels: string;
  runtime: string;
  image: string;
  type: 'buisness' | 'residential';
  solution: string;
  design: string;
  level: string;
  slug: string;
  price: number;
}
