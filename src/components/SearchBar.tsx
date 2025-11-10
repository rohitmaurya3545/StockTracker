import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search stocks by company name or symbol..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 pl-10 pr-4 text-base border-2 focus-visible:ring-2 focus-visible:ring-primary/20"
      />
    </div>
  );
};

export default SearchBar;
