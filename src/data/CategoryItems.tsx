export interface Category {
  id: number;
  code: string;
  name: string;
  short_description: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const CAT_ITEMS: Array<Category> = [
  {
    id: 1,
    code: "CAT-001",
    name: "Edible Salt",
    short_description: "Short description of Category 1",
    description: "Detailed description of Category 1",
    imageSrc: "/asserts/4.jpg",
    imageAlt: "Category 1 Image",
  },
  {
    id: 2,
    code: "CAT-002",
    name: "Industrial Salt",
    short_description: "Short description of Category 1",
    description: "Detailed description of Category 1",
    imageSrc: "/asserts/5.jpg",
    imageAlt: "Category 1 Image",
  },
  {
    id: 3,
    code: "CAT-003",
    name: "Salt Tiles",
    short_description: "Short description of Category 1",
    description: "Detailed description of Category 1",
    imageSrc: "/asserts/salt_tiles.jpeg",
    imageAlt: "Category 1 Image",
  },
  {
    id: 4,
    code: "CAT-004",
    name: "Salt Lamps",
    short_description: "Short description of Category 1",
    description: "Detailed description of Category 1",
    imageSrc: "/asserts/salt_lamp.jpeg",
    imageAlt: "Category 1 Image",
  },
  {
    id: 5,
    code: "CAT-005",
    name: "Animal Lick Salt",
    short_description: "Short description of Category 1",
    description: "Detailed description of Category 1",
    imageSrc: "/asserts/animal_lick_salt.jpeg",
    imageAlt: "Category 1 Image",
  },
];
