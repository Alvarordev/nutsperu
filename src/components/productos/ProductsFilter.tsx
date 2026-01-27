import { useState } from "react";
import SearchFilter from "./SearchFilter";
import CategoryFilter from "./CategoryFilter";
import ProductGrid from "./ProductGrid";

interface Product {
  name: string;
  slug: string;
  category: string;
  images: { id: string; src: string }[];
}

interface ProductsFilterProps {
  products: Product[];
  initialSearch?: string;
  initialCategories?: string[];
}

export default function ProductsFilter({
  products,
  initialSearch = "",
  initialCategories = [],
}: ProductsFilterProps) {
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategories);

  // Extraer categorías únicas de los productos
  const allCategories = Array.from(new Set(products.map((p) => p.category)));

  // Filtrar productos
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory;
  });

  // Actualizar URL cuando cambian los filtros
  const updateURL = (search: string, categories: string[]) => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (categories.length > 0) params.set("categories", categories.join(","));
    
    const newURL = params.toString() ? `?${params.toString()}` : "/productos";
    window.history.pushState({}, "", newURL);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    updateURL(value, selectedCategories);
  };

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
    updateURL(searchQuery, categories);
  };

  return (
    <div className="flex w-full max-w-300 mx-auto">
      <div className="flex flex-col gap-4">
        <SearchFilter initialValue={searchQuery} onSearchChange={handleSearchChange} />
        <CategoryFilter
          categories={allCategories}
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
