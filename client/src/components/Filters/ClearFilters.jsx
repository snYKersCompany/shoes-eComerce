import React from "react";
import { useDispatch } from "react-redux";
import { clearFilters } from "../../redux/features/products/productsActions";
import Button from "react-bootstrap/Button";
import { BsTrashFill } from "react-icons/bs";
import "../../styles/clearFilters.css";

const ClearFilters = () => {
  const dispatch = useDispatch();

  function handleClearFilters(e) {
    e.preventDefault();
    dispatch(clearFilters(e));
  }

  return (
    <Button
      variant="customTrash"
      className="customTrash"
      onClick={(e) => {
        handleClearFilters(e);
      }}
    >
      <BsTrashFill />
    </Button>
  );
};

export default ClearFilters;
