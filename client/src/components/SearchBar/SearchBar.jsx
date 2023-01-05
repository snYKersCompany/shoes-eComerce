import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSearchs, clearFilters, clearOrders, getProductByQuery } from "../../redux/features/products/productsActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsSearch } from "react-icons/bs";
import "../../styles/searchbar.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleInput = (e) => {
    e.preventDefault();
    console.log('esto es el input', e.target.value)
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getProductByQuery(search)); //escucha? :check:
    dispatch(clearFilters())
    dispatch(clearOrders())
    dispatch(addSearchs(search));
    navigate("/home");
    setSearch("");
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="d-flex">
        <Form.Control
          className="input-search"
          type="text"
          value={search}
          onChange={(e) => handleInput(e)}
          placeholder="search"
          />
        <Button variant="custom3" className="custom3">
          <BsSearch
            className="icon"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          />
        </Button>
      </Form.Group>
    </Form>
  );
}
