import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import "./CatalogSection.css";
import { allProducts } from "@/data/allProducts";
import { motion } from "framer-motion";
import AnimatedTitle from "../AnimatedTitle";

type CatalogSectionProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};
// Product type
export type Product = {
  id: number;
  title: string;
  image: string; // This should be relative to the products folder (e.g., "sofas/orion/orion.png")
  category: string;
  description?: string;
};

// 1. Correct the glob pattern to match your actual assets location
const imageModules = import.meta.glob<string>(
  '/src/assets/products/**/*.{jpg,jpeg,png,webp}', 
  { 
    eager: true, 
    import: 'default',
    query: '?url' // This tells Vite to return the resolved URL
  }
);

// 2. Create normalized path mapping
const images: Record<string, string> = {};
for (const path in imageModules) {
  // Normalize the path to be consistent
  const normalizedPath = path.replace('/src/assets/products/', '');
  images[normalizedPath] = imageModules[path];
}

const categories = [
  { id: "sofas", name: "Диваны" },
  { id: "beds", name: "Кровати" },
  { id: "cabinets", name: "Тумбы" },
  { id: "sideboard", name: "Серванты" },
];

const CatalogSection  = ({ activeCategory, setActiveCategory }: CatalogSectionProps) => {
  

  const filteredProducts = allProducts.filter(
    (product) => product.category === activeCategory
  );

  useEffect(() => {
  const storedCategory = localStorage.getItem("activeCategory");

  if (storedCategory) {
    setActiveCategory(storedCategory);

    // Scroll to #catalog after short delay
    setTimeout(() => {
      const el = document.getElementById("catalog");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    localStorage.removeItem("activeCategory");
  }
}, []);

  

  return (
    <section id="catalog" className="relative py-6 px-2 md:py-16 md:px-6 bg-furniture-beige">
      <div className="max-w-7xl mx-auto">
        {/* Category Navigation */}
        <div className="flex justify-center mb-12" >
          <div className="flex w-full flex-wrap justify-between md:justify-center gap-0 md:gap-16">
            {categories.map((category) => (
              <button
                key={category.id}
                className={cn(
                  "catalog-type px-2 py-2 text-sm md:text-2xl font-medium rounded transition-colors",
                  activeCategory === category.id ? "active" : "nonactive"
                )}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>


        {/* Product Grid */}
        <div className="w-full md:w-[70%] mx-auto flex flex-col items-center catalog-active-items">
      {filteredProducts.map((product) => {

        return (
          <Link
            key={product.id}
            // to={`/product/${product.id}`}
            to={`/product/${product.category}/${product.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="relative group w-full"
          >
            <div className="item-image text-center overflow-hidden rounded-lg pb-2 md:pb-10  relative z-10 w-full h-full">
              {product.image ? (
                <img
                  src={`/assets/products/${product.prefix+product.image}`}
                  alt={product.title}
                  loading="lazy"
                />
              ) : (
                <div className="z-[1] w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Изображение отсутствует</span>
                </div>
              )}
            </div>
            
            
            {/* <h3 className=" 
                absolute inset-0 z-0 flex items-start justify-center text-center 
      text-2xl md:text-[115px] font-light text-black pointer-events-none 
      opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
      transition-all duration-500 ease-in-out">{product.title}</h3>
       */}
       <AnimatedTitle text={product.title} />
          </Link>
        );
      })}
    </div>

      </div>
    </section>
  );
};

export default CatalogSection;