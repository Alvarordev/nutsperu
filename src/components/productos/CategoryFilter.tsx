import { useState, useEffect } from "react";
import { categoryLabels, type Category } from "../../types/product";
import { ChevronDown } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

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

  const getDropdownLabel = () => {
    if (selected.length === 0) return "Todas las categorías";
    if (selected.length === 1) return categoryLabels[selected[0] as Category];
    return `${selected.length} categorías seleccionadas`;
  };

  return (
    <>
      {/* Mobile Dropdown */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-background border-2 border-foreground/20 rounded-lg text-lg font-medium hover:border-foreground/40 transition-colors"
        >
          <span>{getDropdownLabel()}</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="mt-2 bg-background border-2 border-foreground/20 rounded-lg p-4 shadow-lg">
            <ul className="gap-3 flex flex-col">
              {categories.map((category) => (
                <li key={category} className="flex items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id={`mobile-${category}`}
                      checked={selected.includes(category)}
                      onChange={() => handleCheckboxChange(category)}
                      className="size-5 border-2 border-foreground rounded-md appearance-none checked:bg-accent cursor-pointer"
                    />
                  </div>
                  <label
                    htmlFor={`mobile-${category}`}
                    className="ml-3 text-base cursor-pointer select-none"
                  >
                    {categoryLabels[category as Category] || category}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Desktop List */}
      <ul className="hidden lg:flex gap-4 flex-col mt-2">
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
    </>
  );
}
