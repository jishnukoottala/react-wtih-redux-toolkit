import React from "react";
import { Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate=useNavigate();
  return (
    <div className="header">
      {/* <Title order={2}>React Redux Shopping Cart</Title> */}
      <Title order={2} className="cursorPointer" onClick={()=>navigate("/")}>Redux toolkit demo</Title>
    </div>
  );
};

export default Header;
