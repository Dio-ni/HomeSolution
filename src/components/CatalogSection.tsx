
import { useState } from "react";
import { cn } from "@/lib/utils";

// Define product types
type Product = {
  id: number;
  name: string;
  image: string;
  category: string;
};

// Sample products data
const products: Product[] = [
  { 
    id: 1, 
    name: "DIZIA", 
    image: "/placeholder.svg", 
    category: "sofas" 
  },
  { 
    id: 2, 
    name: "BON BON LINEA", 
    image: "/placeholder.svg", 
    category: "sofas" 
  },
  { 
    id: 3, 
    name: "PLUS PLUM", 
    image: "/placeholder.svg", 
    category: "sofas" 
  },
  { 
    id: 4, 
    name: "ASTON VILLA", 
    image: "/placeholder.svg", 
    category: "sofas" 
  },
  { 
    id: 5, 
    name: "FOX", 
    image: "/placeholder.svg", 
    category: "sofas" 
  },
  { 
    id: 6, 
    name: "OSLO", 
    image: "/placeholder.svg", 
    category: "chairs" 
  },
  { 
    id: 7, 
    name: "BARCELONA", 
    image: "/placeholder.svg", 
    category: "chairs" 
  },
  { 
    id: 8, 
    name: "TULIP", 
    image: "/placeholder.svg", 
    category: "tables" 
  },
  { 
    id: 9, 
    name: "MARBLE", 
    image: "/placeholder.svg", 
    category: "tables" 
  },
  { 
    id: 10, 
    name: "ARTDECO", 
    image: "/placeholder.svg", 
    category: "cabinets" 
  }
];

// Categories
const categories = [
  { id: "sofas", name: "Диваны" },
  { id: "chairs", name: "Кресла" },
  { id: "tables", name: "Столы" },
  { id: "cabinets", name: "Шкафы" },
];

const CatalogSection = () => {
  const [activeCategory, setActiveCategory] = useState("sofas");

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <section id="catalog" className="py-16 px-6 bg-furniture-beige">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Каталог</h2>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                className={cn(
                  "px-4 py-2 text-sm md:text-base font-medium rounded transition-colors",
                  activeCategory === category.id
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                )}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex flex-col items-center space-y-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="catalog-item w-full max-w-sm"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-center">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
