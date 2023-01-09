import React, { useState } from "react";
import { ButtonExample } from "../IASButton/IASButton";

interface IASComponentProps {
  onChange?: (value: number) => void;
}

export const IASComponent = (props: IASComponentProps): JSX.Element => {
  const [datos, estableceDatos] = useState(0);
  const array = [1, 3, 3, 2, 1];

  const myMap = (
    arr: number[],
    callback: (arrayItem: number, index: number, array: number[]) => number
  ): number[] => {
    const mapArr = [];
    for (let i = 0; i < arr.length; i++) {
      const result = callback(arr[i], i, arr);
      mapArr.push(result);
    }
    return mapArr;
  };

  const myFilter = (
    arr: number[],
    callback: (arrayItem: number, index: number, array: number[]) => boolean
  ): number[] => {
    const filterArr = [];
    for (let i = 0; i < arr.length; i++) {
      const result = callback(arr[i], i, arr);
      if (result) filterArr.push(arr[i]);
    }
    return filterArr;
  };

  const newArray = myMap(array, (num: number) => num * 2);
  const newArray2 = myFilter(array, (num: number) => num % 2 === 0);

  const hijoAPadreSuma = () => {
    estableceDatos(datos + 1);
    estableceDatos(datos + 1);
    estableceDatos(datos + 1);
    estableceDatos((prevState) => prevState + 1);
    estableceDatos((prevState) => prevState + 1);
  };

  const hijoAPadreResta = () => {
    estableceDatos(datos - 1);
  };

  return (
    <div>
      <ButtonExample label="+" onClick={hijoAPadreSuma} />
      <ButtonExample label="-" onClick={hijoAPadreResta} />
      <h1>{newArray}</h1>
      <h1>{newArray2}</h1>
    </div>
  );
};
