interface SubsProps {
  type: string;
  description: string;
  month: string;
  year: string;
}

export const subs: SubsProps[] = [
  {
    type: "Basic Plan",
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    month: "$9.99",
    year: "$119,88",
  },
  {
    type: "Standard Plan",
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    month: "$12.99",
    year: "$155,88",
  },
  {
    type: "Premium Plan",
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    month: "$14.99",
    year: "$179,88",
  },
];
