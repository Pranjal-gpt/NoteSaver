import React from "react";
import { useNavigate } from "react-router-dom";

const PreviousPageButton = (props) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <button  className=" absolute top-3 left-2" onClick={goBack}>
        {props.name}
    </button>
  );
};

export default PreviousPageButton;
