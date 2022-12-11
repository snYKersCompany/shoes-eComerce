import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByQuery } from "../../redux/features/products/productsActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsSearch } from "react-icons/bs";
import "../../styles/searchbar.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleInput = (e) => {
    e.preventDefault();
    console.log("esto es e de handleinput", e.target.value);
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getProductByQuery(search)); //escucha? :check:
    setSearch("");
  };

  return (
    <Form onChange={(e) => handleInput(e)}>
      <Form.Group className="d-flex">
        <Form.Control
          className="input-search"
          type="text"
          value={search}
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
