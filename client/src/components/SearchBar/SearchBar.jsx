import React from "react";
// import Form from "react-bootstrap/Form";
import { useState } from 'react';
import { useDispatch } from "react-redux"
import { getProductByQuery } from '../../redux/features/products/productsActions'


export default function SearchBar() {
  const [search, setSearch] = useState('')

  const dispatch = useDispatch()


  const handleInput = (e) => {
    e.preventDefault();
    console.log('esto es e de handleinput', e.target.value)
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getProductByQuery(search))//escucha? :check:
    setSearch('')
  };

  return (
    <div>
      <input type="text"
      placeholder="search"
      value={search}
      onChange={(e) => {handleInput(e)}}
      />
      <button
      type='submit'
      onClick={(e) => handleSubmit(e)}
      >Search</button>
    </div>
  )


  // return (
  //   <Form onSubmit={(e) => handleSubmit(e)}>
  //     <Form.Group>
  //       <Form.Control type="search" placeholder="Discover a new world" onClick={(e)=> handleSubmit(e)} />
  //     </Form.Group>
  //   </Form>
  // );
}
