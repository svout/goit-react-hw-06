import React from 'react';
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux /contactsSlice';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className="p-4 border rounded shadow mb-2 flex justify-between items-center">
      <div>
        <p className="text-lg font-semibold">Name: {name}</p>
        <p className="text-gray-600">Number: {number}</p>
      </div>
      <button
        onClick={() => dispatch(deleteContact({ id }))}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
