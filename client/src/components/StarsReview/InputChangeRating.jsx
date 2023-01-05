import React from "react";

const InputChangeRating = (props) => {
  return (
    <input
      type="number"
      step="0.1"
      min="0"
      max="5"
      value={props.rating}
      onChange={(e) => {
        if (e.target.value > 5)
          return alert("Números del 0 al 5 contando decimales :)");
        return props.handleRating(e.target.value);
      }}
    />
  );
};

export default InputChangeRating;
