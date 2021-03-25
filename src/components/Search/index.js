import React from 'react';
import { Input } from '../Input';
import { SearchForm } from './styles';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export function Search() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { search } = useLocation();
  const c = queryString.parse(search)?.c || '';

  const handleSubmit = e => {
    e.preventDefault();

    if (c) {
      navigate(
        `/all-products?s=${encodeURIComponent(
          searchTerm
        )}&c=${encodeURIComponent(c)}`
      );
    } else {
      navigate(`/all-products?s=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className=" search-box flex flex-col search w-11/12 pl-2 pr-5  py-8 rounded-r-full box-content ">
    <SearchForm  onSubmit={handleSubmit}>
      <Input
        value={searchTerm}
        onChange={e => setSearchTerm(e.currentTarget.value)}
        className="search-input"
      />
      <button class="search text-white p-2 mt-2 font-bold rounded-full">
        rechercher
      </button>
    </SearchForm>
    </div>
  );
}
