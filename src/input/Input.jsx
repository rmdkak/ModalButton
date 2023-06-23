import React, { useState } from "react";
import { styled } from "styled-components";

const NameInput = ({ getName }) => {
  const [name, setName] = useState("");

  const onChangeHandler = (event) => {
    setName(event.target.value);
    getName(event.target.value);
  };

  return (
    <STinput type="text" id="name" value={name} onChange={onChangeHandler} />
  );
};

const PriceInput = ({ getPrice }) => {
  const [price, setPrice] = useState(0);

  const onChangeHandler = (event) => {
    const commaPrice = Intl.NumberFormat().format(
      event.target.value.replaceAll(",", "")
    );
    if (!/\D/g.test(event.target.value.replaceAll(",", ""))) {
      setPrice(commaPrice);
    }
    getPrice(commaPrice);
  };

  return (
    <STinput type="text" id="price" value={price} onChange={onChangeHandler} />
  );
};

const STinput = styled.input`
  height: 30px;
  width: 200px;
  padding: 5px 15px 5px 15px;
  outline: none;
  border: 2px solid #000;
  border-radius: 30px;
`;

export { NameInput, PriceInput };
