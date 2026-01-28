import { useState, useEffect } from "react";
import SearchFilter from "./SearchFilter";
import CategoryFilter from "./CategoryFilter";
import ProductGrid from "./ProductGrid";
import type { Product } from "../../types/product";

interface ProductsFilterProps {
  products: Product[];
}

export default function ProductsFilter({ products }: ProductsFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get("search") || "";
    const categoriesParam = params.get("categories") || "";
    const urlCategories = categoriesParam ? categoriesParam.split(",") : [];

    setSearchQuery(searchParam);
    setSelectedCategories(urlCategories);
  }, []);

  const allCategories = Array.from(new Set(products.map((p) => p.category)));

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory;
  });

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
        <SearchFilter
          initialValue={searchQuery}
          onSearchChange={handleSearchChange}
        />
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
