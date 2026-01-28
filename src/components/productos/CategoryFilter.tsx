import { useState, useEffect } from "react";
import { categoryLabels, type Category } from "../../types/product";

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategories,
  onCategoryChange,
}: CategoryFilterProps) {
  const [selected, setSelected] = useState<string[]>(selectedCategories);

  useEffect(() => {
    setSelected(selectedCategories);
  }, [selectedCategories]);

  const handleCheckboxChange = (category: string) => {
    const newSelected = selected.includes(category)
      ? selected.filter((c) => c !== category)
      : [...selected, category];
    
    setSelected(newSelected);
    onCategoryChange(newSelected);
  };

  return (
    <ul className="gap-4 flex flex-col mt-2">
      {categories.map((category) => (
        <li key={category} className="flex items-center">
          <div className="relative">
            <input
              type="checkbox"
              id={category}
              checked={selected.includes(category)}
              onChange={() => handleCheckboxChange(category)}
              className="size-6 border-2 border-foreground rounded-md appearance-none checked:bg-accent cursor-pointer"
            />
          </div>
          <label htmlFor={category} className="ml-5 text-lg cursor-pointer select-none pb-1">
            {categoryLabels[category as Category] || category}
          </label>
        </li>
      ))}
    </ul>
  );
}
