export interface Console {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const consoles = [
  {
    id: 1,
    name: 'Xbox Series X',
    price: 500,
    description: 'The highest performing console that Microsoft has to offer'
  },
  {
    id: 2,
    name: 'Xbox Series S',
    price: 300,
    description: 'A lighter, yet powerful, console that Microsoft has'
  },
  {
    id: 3,
    name: 'PS5',
    price: 500,
    description: 'The highest performing console that Sony has to offer'
  },
  {
    id: 4,
    name: 'Nintnedo Switch OLED',
    price: 350,
    description: 'The highest performing console that Nintendo has to offer'
  },
  {
    id: 5,
    name: 'Nintendo Switch Lite',
    price: 200,
    description: 'A portable console that allows you to game no matter where you go'
  },
];