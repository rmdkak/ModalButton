import React, { useState } from "react";
import { NameInput, PriceInput } from "../input/Input";
import { styled } from "styled-components";

function Input() {
  const [state, setState] = useState({
    name: "",
    price: "",
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (state.name === "" || state.price === "") return;
    alert(`{name:${state.name}, price:${state.price.replace(/,/g, "")}}`);
  };
  return (
    <div>
      <h1>Input</h1>
      <form onSubmit={onSubmitHandler}>
        <Stack>
          <label htmlFor="name">이름</label>
          <NameInput
            getName={(value) => setState((obj) => ({ ...obj, name: value }))}
          />
          <label htmlFor="price">가격</label>
          <PriceInput
            getPrice={(value) => setState((obj) => ({ ...obj, price: value }))}
          />
          <button>저장</button>
        </Stack>
      </form>
    </div>
  );
}

const Stack = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
`;

export default Input;
