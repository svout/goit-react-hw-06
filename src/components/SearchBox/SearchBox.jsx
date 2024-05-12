import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux /filtersSlice';
import "./SearchBox.css"

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.filters.searchQuery);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={searchQuery}
      onChange={handleChange}
      className='search-box'
    />
  );
};

export default SearchBox;
