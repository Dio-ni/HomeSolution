import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import "./CatalogSection.css";
import { allProducts } from "@/data/allProducts";

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
  { id: "tables", name: "Столы" },
];

const CatalogSection = () => {
  const [activeCategory, setActiveCategory] = useState("sofas");

  const filteredProducts = allProducts.filter(
    (product) => product.category === activeCategory
  );

  

  return (
    <section id="catalog" className="relative py-6 px-2 md:py-16 md:px-6 bg-furniture-beige">
      <div className="max-w-7xl mx-auto">
        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex w-full flex-wrap justify-between md:justify-between gap-0 md:gap-2">
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
            to={`/product/${product.id}`}
            className="catalog-item group w-full"
          >
            <div className="item-image overflow-hidden rounded-lg pb-2 md:pb-10 ">
              {product.image ? (
                <img
                  src={`/assets/products/${product.prefix+product.image}`}
                  alt={product.title}
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Изображение отсутствует</span>
                </div>
              )}
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-center">{product.title}</h3>
          </Link>
        );
      })}
    </div>

      </div>
    </section>
  );
};

export default CatalogSection;