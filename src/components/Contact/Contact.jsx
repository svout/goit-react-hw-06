import React from 'react';
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux /contactsSlice';
import "./Contact.css"

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className='contact'>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button onClick={() => dispatch(deleteContact({ id }))}>Delete</button>
    </li>
  );
};

export default Contact;