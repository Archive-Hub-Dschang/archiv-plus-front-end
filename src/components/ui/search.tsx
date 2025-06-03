'use client';

import { Search, X } from 'lucide-react';
import { FormEventHandler, ChangeEventHandler } from 'react';

interface SearchInputProps {
  isSearchOpen: boolean;
  setIsSearchOpen: (value: boolean) => void;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export default function SearchInput({ isSearchOpen, setIsSearchOpen, handleSubmit, handleChange }: SearchInputProps) {
  return isSearchOpen ? (
    <div className="relative max-md:hidden" onBlur={() => setIsSearchOpen(false)} tabIndex={-1}>
      <form onSubmit={handleSubmit} method="post">
        <input type="text" placeholder="Rechercher..." className="border border-gray-300 rounded-md py-1 px-4 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-600" autoFocus onChange={handleChange} />
        <button type="button" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" onClick={() => setIsSearchOpen(false)}>
          <X className="size-5" />
        </button>
      </form>
    </div>
  ) : (
    <Search aria-label="search" className="hidden md:block size-5 text-gray-500 cursor-pointer" onClick={() => setIsSearchOpen(true)} />
  );
}
