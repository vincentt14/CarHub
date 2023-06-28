import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: String;
  btnType?: "button" | "submit";
  containerStyles?: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: String;
  setManuFacturer: (manufacturer: String) => void;
}