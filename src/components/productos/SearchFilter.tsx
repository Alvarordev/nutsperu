import { SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface SearchFilterProps {
  initialValue?: string;
  onSearchChange: (value: string) => void;
}

export default function SearchFilter({ initialValue = "", onSearchChange }: SearchFilterProps) {
  const [searchValue, setSearchValue] = useState(initialValue);

  useEffect(() => {
    setSearchValue(initialValue);
  }, [initialValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-lg">Filtro por nombre</p>
      <div className="flex w-60 h-10 border border-foreground py-2 px-3 rounded-full items-center">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchValue}
          onChange={handleChange}
          className="bg-transparent outline-none text-foreground placeholder:text-foreground/60 flex-1"
        />
        <SearchIcon className="ml-auto h-5 w-5 text-foreground/60" />
      </div>
    </div>
  );
}
