import { JSX } from "react/jsx-runtime";
import { Product } from "./types";

export const sofas: Product[] = [
    {
      id: 1,
      title: "ORION",
      prefix:"/sofas/orion/",
      description: "Диван «ORION» — это модульная модель, сочетающая современный дизайн и высокий уровень комфорта. Его модульная конструкция позволяет создавать различные конфигурации, адаптируясь к индивидуальным потребностям и особенностям интерьера.",
      image: "orion.png",
      backimg:"fullback.png",
      category: "sofas",
      imgs:{
        img1: "imgs-1.png",
        img2: "imgs-2.png",
        img3: "imgs-3.png",
        img4: "imgs-4.png",
        img5: "imgs-5.png",
      },
      cards: {
        cardType1: [
          {type: "Интермодуль",img:"intermodul.svg", size: "kg: 51,6 m³: 1,11",},
          {type: "Модуль левого плеча",img:"lefthand.svg", size: "kg: 56,8 m³: 1,21",},
          {type: "Правильный расслабляющий модуль",img:"right-hand-rest.svg", size: "kg: 83,3 m³: 1,62",},
          {type: "Левый расслабляющий модуль",img:"left-hand-rest.svg", size: "kg: 83,3 m³: 1,62",},
        ]
        ,
        // cardType2: [ 
        //   {type: "Akaju", img: "texture/akaju.jpg" },
        //   {type: "Allium", img: "texture/allium.jpg" },

        // ],
        cardType3: [{
          pdfUrl: "",
          title: "Каталог Ликвидации 14.03.2025"
        },
        {
          pdfUrl: "#",
          title: "Каталог Стулья 14.03.2025"
        },{
          pdfUrl: "#",
          title: "Каталог Диваны 14.03.2025"
        },{
          pdfUrl: "@",
          title: "Каталог Activ 14.03.2025"
        },
      ],
      },
    },
    {
      id: 2,
      title: "BON BON LINEA",
      prefix:"/sofas/bonbonlinea/",
      description: "Bon Bon Linea — это модульная система диванов, разработанная для обеспечения максимального комфорта и гибкости в организации жилого пространства. Благодаря модульному дизайну, этот диван можно адаптировать под различные размеры и конфигурации помещений",
      image: "bonbonlinea.png",
      backimg:"bon-bon-linea-back.jpg",
      category: "sofas",
      imgs:{
        img1: "imgs-1.png",
        img2: "imgs-2.png",
        img3: "imgs-3.png",
        img4: "imgs-4.png",
        img5: "imgs-5.png",
      },
      cards: {
        cardType1: [
          {type: "Интермодуль",img:"bonbon-linea-modular-sofa-inter-module.svg", size: "kg: 39,8 m³: 0,95",},
          {type: "Угловой модуль",img:"bonbon-linea-modular-sofa-corner-module.svg", size: "kg: 41,6 m³: 1,49",},
          {type: "Угловой расслабляющий модуль",img:"bonbon-linea-modular-sofa-angled-relaxing-module.svg", size: "kg: 63,3 m³: 1,86",},
          {type: "Двойной угловой модуль",img:"bonbon-linea-modular-sofa-double-angled-module.svg", size: "kg: 79,2 m³: 2,38",},
        ]
        ,
        cardType2: [ 
          {type: "Akaju", img: "texture/akaju.jpg" },
          {type: "Allium", img: "texture/allium.jpg" },
          {type: "Cosmic", img: "texture/cosmic.jpg" },
          {type: "Cosmos B", img: "texture/cosmosb.jpg" },
          {type: "Hoppy", img: "texture/hoppy.jpg" },
          {type: "Inesta", img: "texture/inesta.jpg" },
          {type: "Monaco", img: "texture/monaco.jpg" },

          {type: "Rita", img: "texture/rita.jpg" },
          {type: "Yanki", img: "texture/yanki.jpg" },
          {type: "Voiron", img: "texture/voiron.jpg" },
          {type: "Twist", img: "texture/twist.jpg" },
          {type: "Maya Bay", img: "texture/mayabay.jpg" },
          {type: "Massa", img: "texture/massa.jpg" },
          {type: "Jason", img: "texture/jason.jpg" },

        ],
      //   cardType3: [{
      //     pdfUrl: "",
      //     title: "Каталог Ликвидации 14.03.2025"
      //   },
      //   {
      //     pdfUrl: "#",
      //     title: "Каталог Стулья 14.03.2025"
      //   },{
      //     pdfUrl: "#",
      //     title: "Каталог Диваны 14.03.2025"
      //   },{
      //     pdfUrl: "@",
      //     title: "Каталог Activ 14.03.2025"
      //   },
      // ],
      },
    },
    {
      id: 3,
      title: "PLUS POUFY",
      prefix:"/sofas/pluspoufy/",
      description: "Plus Poufy - это модульная система сидений, разработанная для современных жилых помещений и предлагающая одновременно эстетику и функциональность. Благодаря специально спроектированным широким зонам для сидения и различным вариантам модулей, она позволяет настроить рассадку в соответствии с вашими личными потребностями. Внешние поверхности из высококачественной кожи и ткани придают изысканный вид и повышают долговечность.",
      image: "pluspoufy.png",
      backimg:"pluspoufy-back.jpg",
      category: "sofas",
      imgs:{
        img1: "imgs-1.png",
        img2: "imgs-2.png",
        img3: "imgs-3.png",
        img4: "imgs-4.png",
        img5: "imgs-5.png",
      },
      cards: {
        cardType1: [
          {type: "Модуль гостинной",img:"poufy-living-area-module.svg", size: "kg: 64,1 m³: 2,58",},
          {type: "Пуф",img:"poufy-pouf.svg", size: "kg: 26,0 m³: 0,40",},
          {type: "Пуф с модулем прямоугольного кофейного столика",img:"poufy-pouf-with-rectangle-coffee-table-module.svg", size: "kg: 11,5 m³: 0,19",},
          {type: "Интермодуль",img:"poufy-inter-module.svg", size: "kg: 36,6 m³: 0,79",},
        ]
        ,
        cardType2: [ 
          {type: "Akaju", img: "texture/akaju.jpg" },
          {type: "Allium", img: "texture/allium.jpg" },
          {type: "Cosmic", img: "texture/cosmic.jpg" },
          {type: "Cosmos B", img: "texture/cosmosb.jpg" },
          {type: "Hoppy", img: "texture/hoppy.jpg" },
          {type: "Inesta", img: "texture/inesta.jpg" },
          {type: "Monaco", img: "texture/monaco.jpg" },

          {type: "Rita", img: "texture/rita.jpg" },
          {type: "Yanki", img: "texture/yanki.jpg" },
          {type: "Voiron", img: "texture/voiron.jpg" },
          {type: "Twist", img: "texture/twist.jpg" },
          {type: "Maya Bay", img: "texture/mayabay.jpg" },
          {type: "Massa", img: "texture/massa.jpg" },
          {type: "Jason", img: "texture/jason.jpg" },

        ],
        cardType3: [{
          pdfUrl: "",
          title: "Каталог Ликвидации 14.03.2025"
        },
        {
          pdfUrl: "#",
          title: "Каталог Стулья 14.03.2025"
        },{
          pdfUrl: "#",
          title: "Каталог Диваны 14.03.2025"
        },{
          pdfUrl: "@",
          title: "Каталог Activ 14.03.2025"
        },
      ],
      },
    },
    {
      id: 4,
      title: "ASTON VILLA",
      prefix:"/sofas/astonvilla/",
      description: "Aston Villa - это стильное изделие, которое подходит к любому стилю оформления благодаря современному дизайну и минималистичным линиям. Предлагая комфортное сидение благодаря широкой и глубокой посадочной зоне, он также является идеальным решением для узких помещений благодаря своим компактным размерам.",
      image: "astonvilla.png",
      backimg:"aston-villa-sofa-back.jpg",
      category: "sofas",
      imgs:{
        img1: "imgs-1.png",
        img2: "imgs-2.png",
        img3: "imgs-3.png",
        img4: "imgs-4.png",
        img5: "imgs-5.png",
      },
      cards: {
        cardType1: [
          {type: "3 Диван",img:"aston-villa-3-sofa.svg", size: "kg: 68,9 m³: 1,29",},
          {type: "4 Диван",img:"aston-villa-4-Sofa.svg", size: "kg: 72,4 m³: 1,49",},
        ]
        ,
        cardType2: [ 
          {type: "Akaju", img: "texture/akaju.jpg" },
          {type: "Allium", img: "texture/allium.jpg" },
          {type: "Cosmic", img: "texture/cosmic.jpg" },
          {type: "Cosmos B", img: "texture/cosmosb.jpg" },
          {type: "Hoppy", img: "texture/hoppy.jpg" },
          {type: "Inesta", img: "texture/inesta.jpg" },
          {type: "Monaco", img: "texture/monaco.jpg" },

          {type: "Rita", img: "texture/rita.jpg" },
          {type: "Yanki", img: "texture/yanki.jpg" },
          {type: "Voiron", img: "texture/voiron.jpg" },
          {type: "Twist", img: "texture/twist.jpg" },
          {type: "Maya Bay", img: "texture/mayabay.jpg" },
          {type: "Massa", img: "texture/massa.jpg" },
          {type: "Jason", img: "texture/jason.jpg" },

        ],
        cardType3: [{
          pdfUrl: "",
          title: "Каталог Ликвидации 14.03.2025"
        },
        {
          pdfUrl: "#",
          title: "Каталог Стулья 14.03.2025"
        },{
          pdfUrl: "#",
          title: "Каталог Диваны 14.03.2025"
        },{
          pdfUrl: "@",
          title: "Каталог Activ 14.03.2025"
        },
      ],
      },
    },
    {
      id: 5,
      title: "FOX",
      prefix:"/sofas/fox/",
      description: "Fox - сочетает в себе современный стиль с элегантными линиями и классическими деталями ножек. Благодаря своей модульной структуре он позволяет пользователям создавать индивидуальные композиции, подходящие для их жилых помещений. Благодаря широкому пространству для сидения, глубоким подушкам и мягкой текстуре он обеспечивает максимальный комфорт и идеально подходит как для отдыха, так и для эстетичного внешнего вида.",
      image: "fox.png",
      backimg:"fox-sofa-back.jpg",
      category: "sofas",
      imgs:{
        img1: "imgs-1.png",
        img2: "imgs-2.png",
        img3: "imgs-3.png",
        img4: "imgs-4.png",
        img5: "imgs-5.png",
      },
      cards: {
        cardType1: [
          {type: "Угловой модуль",img:"fox-corner-module.svg", size: "kg: 45,1 m³: 0,61",},
          {type: "1,5 Диван",img:"fox-1-5-sofa.svg", size: "kg: 42,0 m³: 0,51",},
          {type: "Диванный модуль Inter 3",img:"fox-inter-3-module.svg", size: "kg: 55,0 m³: 1,00",},
          {type: "Интермодуль",img:"fox-inter-module.svg", size: "kg: 51,0 m³: 0,51",},
        ]
        ,
        cardType2: [ 
          {type: "Akaju", img: "texture/akaju.jpg" },
          {type: "Allium", img: "texture/allium.jpg" },
          {type: "Cosmic", img: "texture/cosmic.jpg" },
          {type: "Cosmos B", img: "texture/cosmosb.jpg" },
          {type: "Hoppy", img: "texture/hoppy.jpg" },
          {type: "Inesta", img: "texture/inesta.jpg" },
          {type: "Monaco", img: "texture/monaco.jpg" },

          {type: "Rita", img: "texture/rita.jpg" },
          {type: "Yanki", img: "texture/yanki.jpg" },
          {type: "Voiron", img: "texture/voiron.jpg" },
          {type: "Twist", img: "texture/twist.jpg" },
          {type: "Maya Bay", img: "texture/mayabay.jpg" },
          {type: "Massa", img: "texture/massa.jpg" },
          {type: "Jason", img: "texture/jason.jpg" },

        ],
        cardType3: [{
          pdfUrl: "",
          title: "Каталог Ликвидации 14.03.2025"
        },
        {
          pdfUrl: "#",
          title: "Каталог Стулья 14.03.2025"
        },{
          pdfUrl: "#",
          title: "Каталог Диваны 14.03.2025"
        },{
          pdfUrl: "@",
          title: "Каталог Activ 14.03.2025"
        },
      ],
      },
    },
    {
      id: 6,
      title: "ROMA",
      prefix:"/beds/",
      description: "Кровать ROMA от Saloni — это сочетание элегантного дизайна, высокого качества и комфорта. Эта модель идеально впишется в современный интерьер, добавляя спальне стиль и уют.",
      image: "roma.png",
      backimg:"roma-back.jpg",
      category: "beds",
      cards: {
        cardType1: [
          {type: "Кровать 120",img:"roma-bedstead-120.svg", size: "kg: 86,5 m³: 0,55",},
          {type: "Кровать 140",img:"roma-bedstead-140.svg", size: "kg: 92,5 m³: 0,616",},
          {type: "Кровать 140",img:"roma-bedstead-140.svg", size: "kg: 92,5 m³: 0,616",},
        ]
        ,
        // cardType2: [ 
        //   {type: "Akaju", img: "texture/akaju.jpg" },
        //   {type: "Allium", img: "texture/allium.jpg" },

        // ],
        cardType3: [{
          pdfUrl: "",
          title: "Каталог Ликвидации 14.03.2025"
        },
        {
          pdfUrl: "#",
          title: "Каталог Стулья 14.03.2025"
        },{
          pdfUrl: "#",
          title: "Каталог Диваны 14.03.2025"
        },{
          pdfUrl: "@",
          title: "Каталог Activ 14.03.2025"
        },
      ],
      },
    },
    // {
    //   id: 2,
    //   title: "BON BON LINEA",
    //   description: "Bon Bon Linea — это модульная система диванов, разработанная для обеспечения максимального комфорта и гибкости в организации жилого пространства.",
    //   image: "/sofas/bonbonlinea/bonbonlinea.png",
    //   category: "sofas",
    //   cards: {
    //     cardType1: { type: "Диван", size: "210x100x80 см" },
    //     cardType3: {
    //       pdfUrl: "/pdfs/bon-bon-linea.pdf",
    //       previewImg: "/pdf-preview.png"
    //     },
    //   },
    // },
    // {
    //   id: 3,
    //   title: "PLUS POUFY",
    //   description: "Plus Poufy - это модульная система сидений, предлагающая эстетику и функциональность. Широкие зоны для сидения и различные модули позволяют адаптировать рассадку.",
    //   image: "/sofas/pluspoufy/pluspoufy.png",
    //   category: "sofas",
    //   cards: {
    //     cardType2: { type: "Диван", size: "220x95x80 см" },
    //   },
    // },
    // {
    //   id: 4,
    //   title: "ASTON VILLA",
    //   description: "Aston Villa - стильное изделие с современным дизайном и минималистичными линиями. Идеален для узких помещений.",
    //   image: "/sofas/astonvilla/astonvilla.png",
    //   category: "sofas",
    //   cards: {
    //     cardType1: { type: "Диван", size: "200x90x80 см" },
    //     cardType2: { type: "Диван", size: "220x95x80 см" },
    //   },
    // },
    // {
    //   id: 5,
    //   title: "FOX",
    //   description: "Fox - современный стиль с элегантными линиями. Модульная структура позволяет создавать индивидуальные композиции.",
    //   image: "/sofas/fox/fox.png",
    //   category: "sofas",
    //   cards: {
    //     cardType1: { type: "Диван", size: "230x100x85 см" },
    //     cardType2: { type: "Диван", size: "220x95x80 см" },
    //     cardType3: {
    //       pdfUrl: "/pdfs/fox.pdf",
    //       previewImg: "/pdf-preview.png"
    //     },
    //   },
    // },
  ];