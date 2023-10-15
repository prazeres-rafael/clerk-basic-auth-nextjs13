"use client";
import Button from "@mui/material/Button";
type ButtonProps = {
  text: string;
};

const ButtonS = ({ text }: ButtonProps) => {
  return <Button>{text}</Button>;
};

export default ButtonS;
