export type CardType1 = {
  type: string;
  img: string;
  size: string;
};

export type CardType2 = {
  type: string;
  img: string;
};

export type CardType3 = {
  pdfUrl: string;
  title: string;
};

export type Product = {
  id: number;
  prefix: string;
  title: string;
  description: string;
  image: string;
  backimg: string;
  category: "sofas" | "beds" | "thumbnail" | "sideboard" | "tables";
  imgs? : {
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    img5: string;
  };
  cards: {
    cardType1?: CardType1[]; // 👈 now an array
    cardType2?: CardType2[];
    cardType3?: CardType3[];
  };
};
