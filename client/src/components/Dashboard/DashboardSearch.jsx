import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsSearch } from "react-icons/bs";
import CloseButton from "react-bootstrap/CloseButton";
import "../../styles/searchbar.css";

function DashboardSearch({ type, search, setSearch }) {
  const [localSearch, setLocalSearch] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    console.log("esto es el input", e.target.value);
    setLocalSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "users") setSearch(localSearch);

    // navigate("/home");
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="d-flex">
        <Form.Control
          className="input-search"
          type="text"
          value={localSearch}
          onChange={(e) => handleInput(e)}
          placeholder="search"
        />
        <Button
          variant="custom3"
          className="custom3"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          <BsSearch className="icon" />
        </Button>
        {search.length ? (
          <CloseButton
            onClick={() => {
              setSearch("");
              setLocalSearch("");
            }}
          />
        ) : null}
      </Form.Group>
    </Form>
  );
}

export default DashboardSearch;
