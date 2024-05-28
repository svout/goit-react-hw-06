import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux /filtersSlice';

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
      className='w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
    />
  );
};

export default SearchBox;
