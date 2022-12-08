import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChars } from "../redux/features/characters/characterActions";

const Characters = () => {
  const dispatch = useDispatch();
  //toma el estado del slice
  const { characters } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getChars());
  }, [dispatch]);

  return (
    <div>
      {characters?.map((el, i) => {
        return (
          <div key={i}>
            <p>{el.name}</p>
            <img src={el.image} alt={el.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
